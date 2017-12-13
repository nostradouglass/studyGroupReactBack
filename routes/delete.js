var express = require('express');
var router = express.Router();

var User = require( '../models/users.model')

// route is at /remove

/* Remove a user. */
router.delete('/:id', (req, res, next) => {
    User
      .where('_id').equals(req.params.id)
      .remove()
      .exec(function(err, data) {
        if (err) {
          res.send('error!')
        } else {
          res.json(data)
        }
      })
  })

module.exports = router;
