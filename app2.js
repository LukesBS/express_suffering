const express = require("express");
const app = express();
const EXP_PORT = 8080;

// Registrieren von EJS als Rendering Engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", {
    planet: "Mars",
    version: "1.0",
    trabanten: ["Phobos", "Deimos"],
  });
});
app.get("/", (req, res) => {
  res.render("pages/index", { planet: "Jupiter", version: "1.0" });
});

// Einbinden der index.ejs Seite für alle GET Anfragen ohne Route:
app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(EXP_PORT, () => {
  console.log("Ich höre auf Port! " + EXP_PORT);
});
