const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

router.get('/', eventsCtrl.index);

/*------Protected Routes -----*/
router.use(require('../../config/auth'));
router.post('/', checkAuth, eventsCtrl.create);

/*----Helper Functions---*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;