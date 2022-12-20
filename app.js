// Laden der Funktion zur Erstellung eines Express Servers und Zuweisung
// an eine Konstante "express"
const express = require('express');

// Erstellung des Express Servers und Zuweisung an eine Konstante "app"
const app = express();

// Festlegung des Ports in einer Konstanten für späteren Gebrauch
const EXP_PORT = 8080

// Erlauben des statischen Zugriffs auf den Unterordner "public", indem
// als Middleware die Methode "static" eingesetzt wird
app.use(express.static('public'));

// parsen der Body-Inhaltes und vorbereiten der Daten in req.body
app.subscribe(express.urlencoded());

//verarbeiten aller GET_Anfragen der Route /meineTestanfrage
app.get("/meineTestanfrage", (req, res) => {
    // Senden eines Textes an den Client
    res.send("Ich habe die Anfrage empfangen");
});

app.get(/\/[^\/]{3}.*/, (req, res) => {
    res.send("Anfrage mit mind. drei Zeichen bis zum 1. Slash");
});

app.get("/kunde/*", (req, res, next ) => {
    res.write("Kunde\n");
    next();

})

app.get("/kunde/anfrage", (req, res) => {
    res.write("Kunde und Anfrage");
    res.end();
});


app.get("/abteilung/:abteilungId/kunde/:kundeID", (req, res) => {
    const {abteilungId, kundeID} = req.params;
    const anrede = req.query.anrede ? req.anrede : "";
    res.send (`Abteilung : ${abteilungId}<br/>Kunde:${anrede} ${kundeID}`);
});




// Starten des Servers und Übergabe einer Funktion über einen Lambda
// Ausdruck, welche nach Start ausgeführt werden soll
app.listen(EXP_PORT, () => {
    // Konsolenausgabe
    console.log("Ich höre auf Port " + EXP_PORT);
    console.log("I am listening to port: " + EXP_PORT);
});
app.post('/testMessage', function (req, res, next) {
    res.send("I recived: " + req.body.myMessage) ; 
});


