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

// Starten des Servers und Übergabe einer Funktion über einen Lambda
// Ausdruck, welche nach Start ausgeführt werden soll
app.listen(EXP_PORT, () => {
    // Konsolenausgabe
    console.log("Ich höre auf Port " + EXP_PORT);
    console.log("I am listening to port: " + EXP_PORT);
})