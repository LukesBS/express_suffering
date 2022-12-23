const express = require('express');
const router = express.Router();

router.get("/:num1/:num2", (req, res, next) => {
    console.log("im get");
    const {num1, num2} = req.params;

    res.send((parseInt(num1)+parseInt(num2)));
    //next()
})



module.exports = router;