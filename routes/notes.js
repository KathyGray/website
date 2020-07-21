var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('notes', {title: 'notes',
                            session: req.session});
});

module.exports = router;
