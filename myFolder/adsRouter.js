var express = require('express'),
    router = express.Router();
router.get('/:id', (req, res) => {
    res.send('sending Data From Routing' + req.params.id);
})
router.get('/', (req, res) => {
    res.send('sending get Data');
})
router.get('/', (req, res) => {
    res.send('sending get Emp');
})
module.exports = router;