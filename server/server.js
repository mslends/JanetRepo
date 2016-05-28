var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");

var productsCtrl = require("./backControllers/productsCtrl.js");
var userCtrl = require("./backControllers/userCtrl.js");
var cartCtrl = require("./backControllers/cartCtrl.js");




//CONFIG//
var config = require("./server_config.js");

//EXPRESS//
var app = express();

app.use(express.static(__dirname + "../public"));
app.use(bodyParser.json());




// LOCAL AUTH

var sessionKeys = require('./sessionKeys.js');

require('./config/passport.js')(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: sessionKeys.secret,
  resave: true,
  saveUninitialized: true
}));

app.post('/auth', function(req, res, next){

  next();
}, passport.authenticate('local-signup'), function(req, res){
  res.send({login: true, user: req.user});
})





//GET, POST, PUT, DELETE//

//PRODUCTS//
app.get("/api/products", productsCtrl.getProducts);
app.get("/api/products/:id", productsCtrl.getSingleProduct);
app.post("/api/products", productsCtrl.createProduct);
app.put("/api/products/:id", productsCtrl.updateSingleProduct);
app.delete("/api/products/:id", productsCtrl.deleteSingleProduct);


// USERS =======================================
app.get("/api/users", userCtrl.getUsers);
app.get("/api/users/:id", userCtrl.getUser);
app.post("/api/users", userCtrl.createUser);
app.put("/api/users/:id", userCtrl.updateUser);
app.delete("/api/users/:id", userCtrl.deleteUser);




//CONNECTIONS//
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.set("debug", true);
mongoose.connect(mongoURI, function(err){
  if(err){
    console.log(err);
  } else{
    console.log("mongoose is ready");
  }
});
mongoose.connection.once("open", function(){
  console.log("Connected to MongoDB at", mongoURI);
  app.listen(port, function(){
    console.log("Easy listening on port " + port + ": The Breeze");
  });
});
