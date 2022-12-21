// Laden der Funktion zur Erstellung eines Express Servers und Zuweisung
// an eine Konstante "express"
const express = require('express');
const myMw = require("./myMW");
const myEmployeeRouters = require("./routes/Mitarbeiter");
const addition = require("./routes/addition");

// Erstellung des Express Servers und Zuweisung an eine Konstante "app"
const app = express();

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowsMs: 60*1000, // Zeitintervall 1 min
    max: 2000, // Maximal 2 Anfragen von einer IP innterhalb des Zeitintervall
    message: "Zu viele Anfragen pro Zeit!"
});



// Festlegung des Ports in einer Konstanten für späteren Gebrauch
const EXP_PORT = 8080
//app.use(limiter); // Jeder Request wird verarbeitet
//app.use("/api/", myMw);
//app.use("/api/mitarbeiter/", myEmployeeRouters);
app.use("/api/add", addition);

// Erlauben des statischen Zugriffs auf den Unterordner "public", indem
// als Middleware die Methode "static" eingesetzt wird
app.use(express.static('public'));

// parsen der Body-Inhaltes und vorbereiten der Daten in req.body
app.use(express.urlencoded({extended: true}));

//verarbeiten aller GET_Anfragen der Route /meineTestanfrage
app.get("/meineTestanfrage", (req, res) => {
    // Senden eines Textes an den Client
    res.send("Ich habe die Anfrage empfangen");
});

//app.get(/\/[^\/]{3}.*/, (req, res) => {
//    res.send("Anfrage mit mind. drei Zeichen bis zum 1. Slash");
//});

app.get("/kunde/*", (req, res, next ) => {
    res.write("Kunde\n");
    next();

})

app.get("/api/add", (req, res) => {
    res.write("test");
    res.end();
});

app.get("/kunde/anfrage", (req, res) => {
    res.write("Kunde und Anfrage");
    res.end();
});

app.get("/api/eins", (req, res, next) => {
    res.write("eins");
    res.end();
});
app.get("/api/zwei", (req, res, next) => {
    res.write("zwei");
    res.end();
});
app.get("/test", (req, res, next) => {
    res.send("test");
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

app.post('/added_stuff', function (req, res, next) {
    res.send("stuff added equals " + (parseInt(req.body.number1) + parseInt(req.body.number2)) ) ; 
});


