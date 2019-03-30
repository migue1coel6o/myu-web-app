const compression = require("compression");
const spdy = require("https");
const express = require("express");
const next = require("next");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();
    if (!dev) {
      server.use(compression());
    }

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    const options = {
      key: fs.readFileSync(__dirname + "/certificate/server.key"),
      cert: fs.readFileSync(__dirname + "/certificate/server.crt")
    };

    if (dev) {
      server.listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
      });
    } else {
      spdy.createServer(options, server).listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on https://localhost:${PORT}`);
      });
    }
  })
  .catch(ex => {
    console.error(ex);
    process.exit(1);
  });
