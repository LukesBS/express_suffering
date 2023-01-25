const express = require("express");
const app = express();
const EXP_PORT = 8080;
const musicianRoutes = require("./routes/musician");

app.use("/musician/", musicianRoutes);

app.listen(EXP_PORT, () => {
  console.log("Ich höre auf Port! " + EXP_PORT);
});
