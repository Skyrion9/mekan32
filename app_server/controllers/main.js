var express = require('express');
var router = express.Router();

//anasayfa yoneten kontrolcu metod 
module.exports.index=function(req, res, next) {
  res.render('index', { title: 'Mert Kuş'});
  
}
