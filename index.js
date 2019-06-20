var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path= require('path');
 
app.use(require(path.join(__dirname,'router')));




// esClient.ping({
//     requestTimeout: 30000,

// }, function(error){
//     if(error){
//         console.log('elasticsearh cluster is down');
//     }else{
//         console.log('Looks Great');
//     }
// })
app.listen(8080, function(){
  console.log("Server Started on 8080");
});