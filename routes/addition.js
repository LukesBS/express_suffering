const express = require('express');
const router = express.Router();

router.get("/add/:num1/:num2", (req, res, next) => {
    const {num1, num2} = req.params;

    res.send(`${parseInt(num1)+parseInt(num2)}`);

})

router.get("/sub/:num1/:num2", (req, res, next) => {
    const {num1, num2} = req.params;

    res.send(`${parseInt(num1)-parseInt(num2)}`);

})

router.get("/mul/:num1/:num2", (req, res, next) => {
    const {num1, num2} = req.params;

    res.send(`${parseInt(num1)*parseInt(num2)}`);

})

router.get("/div/:num1/:num2", (req, res, next) => {
    const {num1, num2} = req.params;

    res.send(`${parseInt(num1)/parseInt(num2)}`);

})

//Beispieldivison:
//http://localhost:8080/api/doStuff/div/4/5
module.exports = router;