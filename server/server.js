const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");

const productsCtrl = require("./backControllers/productsCtrl.js");
const userCtrl = require("./backControllers/userCtrl.js");
const cartCtrl = require("./backControllers/cartCtrl.js");




//CONFIG//
const config = require("./server_config.js");

//EXPRESS//
const app = express();

app.use(express.static(__dirname + "../public"));
app.use(bodyParser.json());




//LOCAL AUTH//
const sessionKeys = require('./sessionKeys.js');

require('./config/passport.js')(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: sessionKeys.secret,
  resave: true,
  saveUninitialized: true
}));

app.post('/auth', (req, res, next)=>{
  next();
}, passport.authenticate('local-signup'), (req, res)=>{
  res.send({login: true, user: req.user});
})





//GET, POST, PUT, DELETE//

//PRODUCTS//
app.get("/api/products", productsCtrl.getProducts);
app.get("/api/products/:id", productsCtrl.getSingleProduct);
app.post("/api/products", productsCtrl.createProduct);
app.put("/api/products/:id", productsCtrl.updateSingleProduct);
app.delete("/api/products/:id", productsCtrl.deleteSingleProduct);


//USERS//
app.get("/api/users", userCtrl.getUsers);
app.get("/api/users/:id", userCtrl.getUser);
app.post("/api/users", userCtrl.createUser);
app.put("/api/users/:id", userCtrl.updateUser);
app.delete("/api/users/:id", userCtrl.deleteUser);
app.post("/api/users/login", userCtrl.login);
app.get("/api/users/logout", userCtrl.logout);


//CONNECTIONS//
const mongoURI = config.MONGO_URI;
const port = config.PORT;

mongoose.set("debug", true);
mongoose.connect(mongoURI, (err)=>{
  if(err){
    console.log(err);
  } else{
    console.log("mongoose is ready");
  }
});
mongoose.connection.once("open", ()=>{
  console.log("Connected to MongoDB at", mongoURI);
  app.listen(port, ()=>{
    console.log("Easy listening on port " + port + ": The Breeze");
  });
});
