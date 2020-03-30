export default (req, res) => {
  res.setHeader('Set-Cookie', 'subdomaincookie=456;Domain=.app.close.com.localhost;Path=/;HttpOnly');
  res.status(200);
  res.json({ status: 'Cookie SET', cookies: req.cookies, headers: req.headers });
}