export default (req, res) => {
  res.status(200);
  res.json({ name: 'John', email: 'john@example.com', headers: req.headers });
}