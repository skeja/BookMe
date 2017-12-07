const express = require('express');
const router = express.Router();

router.use(require('./note'));
router.use(require('./booking'));

module.exports = router;
