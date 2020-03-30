export default (req, res) => {
  res.status(200);
  res.json({ status: 'Cookie GET', cookies: req.cookies, headers: req.headers });
}