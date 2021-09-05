const { Router } = require('express');
const router = Router();

/* GET home page. */
router.get('/test', function (req, res) {
  console.log('router.get(/test)');
  res.json({ message: 'test good alive' });
});

module.exports = router;
