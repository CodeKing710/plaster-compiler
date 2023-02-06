(async () => {
  require('dotenv').config();

  const express = require('express');
  const app = express();
  const PORT = process.env.PORT ?? 3000;
  const routes = require('./routes');
  // const utils = require('./utils');

  app.use(express.json());
  app.use(express.static("public"));
  app.use(express.urlencoded({extended: true}));

  for(const route in routes) {
    app.use(routes[route].path, routes[route].ctrl);
  }

  app.get('*', (req, res) => {
    res.status(404);
  });

  app.listen(PORT, console.log(`Listening on port ${PORT}...`));
})();
