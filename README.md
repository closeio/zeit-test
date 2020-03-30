# uisplitoff

- [x] run tests / lint
- [x] e2e tests — Cypress GH Actions https://github.com/cypress-io/github-action#start-server
- [x] authenticated API calls (are headers forwarded?)

### Netlify vs Zeit

- There is no CI functionality out of the box, both will need CI integration e.g. GH Actions

#### Zeit
- More powerful [regex rewrites](https://zeit.co/docs/configuration#project/rewrites) similar as in NGINX
- Great GH integration. Easier access to multiple deployments from github history (still possible with Netlify but requires visiting Netlify's UI) e.g.
![image](https://user-images.githubusercontent.com/2706504/77521916-b08ca580-6e83-11ea-8b41-9aede84f85b6.png)
- Having `now dev` is pretty neat — it creates "local environment" of zeit framework and allow you to test e.g. server functions (Netlify has something similar in beta now https://www.netlify.com/products/dev/)