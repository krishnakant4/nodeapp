var express = require('express');
var router = express.Router();
const Post = require('../models/post');
const shipw = require('../models/shipwrecks');

/* GET home page. */
router.route('/')
  .get(function (req, res, next) {

    Post.find({}, function (err, data) {
      res.send(data);
      // res.render('index', {
      //   title: "krishna"
      // });
    });
    // Post.find().skip(1).limit(2).pretty();
    // Post.find({}, null, {
    //   limit: 3,
    //   skip: 0
    // }).then(function (data) {
    //   res.send(data);
    // }).catch(err => {
    //   res.send(err);
    // });


  })
  .post(function (req, res, next) {
    const post = new Post({
      title: req.body.title,
      description: req.body.description
    })
    post.save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send({
          message: err
        });
      });
  });


module.exports = router;