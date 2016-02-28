'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/user_fns');




var notImplement = (req,res) => {
  res.send( req.method + ' this method is not yet implemented for users')
}

//get
router
  .get('/', db.getUsers, (req,res) => {
    res.render('users/uindex', {users:res.users})
  })

//post
router.post('/', /*getusersfromSQL, */ notImplement)

//delete
router.delete('/', /*getusersfromSQL, */ notImplement )

//put???
router.put('/', /*getusersfromSQL, */ notImplement )





module.exports = router;
