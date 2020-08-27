const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../../controllers/restaurants');


router.get('/', restaurantsCtrl.index);
router.get('/:id', restaurantsCtrl.show);

module.exports = router;