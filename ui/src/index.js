function createMain() {
  const element = document.createElement('div');
  element.innerText = 'Loading...';
  return element;
}

function br() {
  return document.createElement('br');
}

function text(content) {
  return document.createTextNode(content);
}

function runMain() {
  const main = createMain();
  document.body.appendChild(main);

  fetch('/api/v1/users')
    .then(response => response.json())
    .then(users => {
      main.innerText = '';
      return users;
    })
    .then(users => {
      users
        .flatMap(o => [text(o.name), br()])
        .forEach(node => main.appendChild(node));
    })

  fetch('/test-headers', {
    headers: {
      'X-TZ-Offset': 1,
      'X-CSRFToken': 'test123'
    }
  })
  .then(response => response.json())
  .then(console.log)
}

runMain();

