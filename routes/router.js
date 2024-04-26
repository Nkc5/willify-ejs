
const router = require('express').Router();
const Controller = require('../controller/controller.js');


const controller = new Controller();

router.post('/about-me', controller.aboutMe);


module.exports = router;