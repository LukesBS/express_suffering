const express = require("express");

const router = express.Router();

const Musician = require("../models/musician.model");

// Für Routen, welche Musiker nach ID suchen:

router.get("/id/:id", (req, res, next) => {
  const { id } = req.params;

  // Aufruf der Modelmethode, welche einen Musiker über ID sucht

  Musician.findById(id, (err, musician) => {
    if (err) {
      console.log("DB Error: " + err);

      res.send("Technical Error");
    } else {
      res.send(musician.firstName + " " + musician.lastName);
    }
  });
});

// für Routen, welche Musiker nach Vornamen suchen:

router.get("/firstname/:firstName", (req, res, next) => {
  const { firstName } = req.params;

  Musician.findByFirstName(firstName, (err, musicians) => {
    if (err) {
      console.log("DB Error: " + err);

      res.send("Technical Error");
    } else {
      // String für die Ausgabe. In realer App hier rendern!

      let data = "";

      musicians.forEach((element) => {
        data +=
          element.musId +
          " " +
          element.firstName +
          " " +
          element.lastName +
          "<br/>";
      });

      res.send(data);
    }
  });
});

module.exports = router;
