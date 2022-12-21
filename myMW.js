const express = require('express');
const router = express.Router();

router.all("/eins", (req, res, next) => {
    res.write("I am in my middleware\n");
    //res.end();
    next();
});
module.exports = router;