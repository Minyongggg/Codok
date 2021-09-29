const router = require('express').Router();
const passport = require('passport');
const controller = require('./controller');

const passportAuth = passport.authenticate('local', {});

router.post('/signup', controller.signup, passportAuth, controller.login);
router.post('/login', passportAuth, controller.login);
router.get('/logout', controller.logout);

module.exports = router;
