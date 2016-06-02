const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");

const productsCtrl = require("./backControllers/productsCtrl.js");
const userCtrl = require("./backControllers/userCtrl.js");
const cartCtrl = require("./backControllers/cartCtrl.js");
const orderCtrl = require("./backControllers/orderCtrl.js");





//CONFIG//
const config = require("./server_config.js");

//EXPRESS//
const app = express();


const sessionKeys = require('./sessionKeys.js');

require('./config/passport.js')(passport);



app.use(express.static(__dirname + "./../public"));


app.use(bodyParser.json());




//LOCAL AUTH//
app.use(session({
  secret: sessionKeys.secret,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());


app.use(passport.session());



app.post('/auth', passport.authenticate('local-signup', {}), (req, res)=>{
  console.log(req.user);
  res.send({login: true, user: req.user});
});





//GET, POST, PUT, DELETE//

//PRODUCTS//
app.get("/api/products", productsCtrl.getProducts);
app.post("/api/products", productsCtrl.createProduct);
app.get("/api/products/:id", productsCtrl.getSingleProduct);
app.put("/api/products/:id", productsCtrl.updateSingleProduct);
app.delete("/api/products/:id", productsCtrl.deleteSingleProduct);


//USERS//
app.get("/api/users", userCtrl.getUsers);
app.get("/api/users/currentUser", userCtrl.currentUser);
app.get("/api/users/logout", userCtrl.logout);
app.get("/api/users/:id", userCtrl.getUser);
// app.post("/api/users", userCtrl.createUser);
app.put("/api/users/:id", userCtrl.updateUser);
app.delete("/api/users/:id", userCtrl.deleteUser);
// app.post("/api/users/login", userCtrl.login);


//Orders//
app.get("/api/orders", orderCtrl.getOrders);
app.post("/api/orders", orderCtrl.createOrder);
app.get("/api/orders/:id", orderCtrl.getOrder);
app.put("/api/orders/:id", orderCtrl.updateOrder);
app.delete("/api/orders/:id", orderCtrl.deleteOrder);




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
