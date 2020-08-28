const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

router.get('/', eventsCtrl.index);
router.get('/:id/user', eventsCtrl.userGetEvents);
router.get('/:id/delete', eventsCtrl.delete);

/*------Protected Routes -----*/
router.use(require('../../config/auth'));
router.post('/', checkAuth, eventsCtrl.create);
router.put('/', checkAuth, eventsCtrl.update);
router.delete('/:id/delete', checkAuth, eventsCtrl.delete);
// router.post('/', eventsCtrl.create);
//router.delete('/:id/delete', eventsCtrl.delete);

/*----Helper Functions---*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;