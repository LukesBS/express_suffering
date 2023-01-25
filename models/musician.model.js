const dbcon = require("./db.js");

// Konstruktor, basierend auf den SQL-Ergebnissen

const Musician = function (musicianData) {
  this.musId = musicianData.musId;

  this.firstName = musicianData.firstName;

  this.lastName = musicianData.lastName;
};

// Statische Methode. Sie erwartet eine id, nach der in der DB gesucht

// wird. Weiterhin eine Funktion „resultData“, welche die Ergebnisse

// verarbeiten soll

Musician.findById = (id, resultData) => {
  // DB-Abfrage über Parameter, um SQL injection zu verhindern1

  dbcon.query(
    "SELECT FName AS firstName, LName AS lastName FROM musician WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        // für den Fall, dass die Abfrage fehlschlug

        // Einfügen der Fehlermedlung in die Verarbeitungsfunktion

        resultData(err, null);

        return; // Abbruch von findById
      }

      if (result.length) {
        // für den Erfolgsfall

        // Erzeugen eines neuen Objektes mit den Ergebnissen2

        resultData(null, new Musician({ musId: id, ...result[0] }));

        return;
      }

      // für den Fall, dass nichts gefunden wurde

      resultData({ error_reason: "not_found" }, null);
    }
  );
};

// Beispielmethode für den Fall, dass mehrere Daten zu erwarten sind

Musician.findByFirstName = (firstName, resultData) => {
  dbcon.query(
    "SELECT ID AS musId, LName AS lastName FROM musician WHERE FName = ?",
    firstName,
    (err, result) => {
      if (err) {
        resultData(err, null);

        return;
      }

      // die Daten werden in einem Array gepusht und zurückgegeben

      let musicians = Array();

      if (result.length) {
        result.forEach((element) => {
          musicians.push(new Musician({ firstName: firstName, ...element }));
        });

        resultData(null, musicians);

        return;
      }

      resultData({ error_reason: "not_found" }, null);
    }
  );
};
module.exports = Musician;