var express = require('express');
var router = express.Router();

var User = require( '../models/users.model')

// Route /new_user


/* POST create user */
router.post('/', function(req, res, next) {
    var user = new User({
        userName: req.body.userName,
        userPassword: req.body.userPassword,
        userPhone: req.body.userPhone
        })
        
        user.save((err, data) => {
          if (err) {
            res.send('error!')
          } else {
            res.json(data)
          }
        })
});

module.exports = router;
