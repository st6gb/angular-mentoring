const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  if (req.headers.token) {
    return next();
  }
  res.sendStatus(401);
});
server.use(router);
server.listen(3004, () => {
  console.log('JSON Server is running')
});