const User = require("../models/userModel.js");

module.exports = {
    getUsers: (req, res, next)=>{
      User.find().exec((err, response)=>{
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },

    getUser: (req, res, next)=>{
      User.findById(req.params.id)
      .populate('wishlist')
      .populate({path:'orderHistory', populate:{path:'productsOrdered.product'}})
      .exec((err, response)=>{
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },

    currentUser: (req, res, next)=>{
      console.log(req.user, 'current user');
      if(!req.user) res.status(401).json('User not found');
      res.send(req.user);
    },

    createUser: (req, res, next)=>{
      var newUser = new User(req.body);
      newUser.save((err, response)=>{
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },

    updateUser: (req, res, next)=>{
      User.findByIdAndUpdate(req.params.id, req.body, (err, response)=>{
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },

    deleteUser: (req, res, next)=>{
      User.findByIdAndRemove(req.params.id, (err, response)=>{
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },

    login: (req, res, next)=>{
      User.findOne(req.body, (err, response)=>{
        if(err){
          res.status(500).json(err);
        } else {
          if(response){
            res.status(200).json({login: true, user: response});
          } else {
            res.status(200).json({login: false});
          }
        }
      })
    },

    logout: (req, res, next)=>{
      req.logout();
      console.log("logout", req.user)
      return res.status(200).send('logged out');
    }



};
