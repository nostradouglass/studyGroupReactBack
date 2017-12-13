var express = require('express');
var router = express.Router();

var User = require( '../models/users.model')

// Route /users

// GET all users
router.get('/', (req, res, next) => {
    User
      .find()
      .limit(50)
      .exec((err, data) => {
          if (err) res.send("err")
          res.json(data)
      })
  });

// GET a single user
  router.get('/:id', (req, res, next) =>{
    User
      .where('_id').equals(req.params.id)
      .exec((err, data) => {  
        if (err) {
          res.send('error!')
        } else {
          res.json(data[0])
        }
      })
  })



module.exports = router;
