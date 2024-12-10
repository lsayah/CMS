var express = require('express');
const { createUserSchema } = require('../schemas/userSchema');
var router = express.Router();
const { validateArticle } = require("./middleware");
const { createUser } = require("../controllers/user");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({username: 'ruchdane'});
});

router.post('/', validateArticle(createUserSchema), createUser) 


module.exports = router;
