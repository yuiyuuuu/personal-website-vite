const express = require("express");
const app = express();
const morgan = require("morgan");
const parser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;
import { createServer as createViteServer } from "vite";

app.use(morgan("dev"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: "custom",
});

// use vite's connect instance as middleware
// if you use your own express router (express.Router()), you should use router.use
app.use(vite.middlewares);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => console.log("listening on port " + port));
