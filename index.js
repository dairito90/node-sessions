var express = require('express');
var app = express();
var PORT = 3004;
var session = require('express-session');

app.get('/',function(req,res,next){
  console.log("got request!!!~!~~!!");
  return next();
});


app.use(session({
  secret:'thi is a super secret password',
  saveUninitialized:true,
  resave:true
}));


app.get('/inHell', function(req,res){
  res.send("Fidel -Mannequin Challenge Champ");
});

app.get('/whatsgoingoninhell', function(req,res){
if(!req.session) res.sendStatus(500);
if(!req.session.numVisited) req.session.numVisited = 0;
req.session.numVisited++;
res.send("Number of kisses between Fidel and Chavez: "+req.session.numVisited);
});

app.listen(PORT,function(){
  console.log("Server listening on port"+PORT)
});
