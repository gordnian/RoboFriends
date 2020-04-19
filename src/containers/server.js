import express from "express";
import react from "react";
import fs from "fs";
import { renderToString } from "react-dom/server";
import App from "./App";

const app = express();

app.use(express.static("/public"));

const robosts = JSON.parse(fs.readFileSync("/public/robots.txt", "utf8"));
const RoboFriendsApp = React.createElement(App);
app.get("/", (req, res) => {
  res.render("index", {
    content: renderToString(RoboFriendsApp({ data: robosts })),
  });
});
