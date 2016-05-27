var User = require("../models/userModel.js");

module.exports = {
    getUsers: function(req, res, next){
      User.find().exec(function(err, response){
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },
    getUser: function(req, res, next){
      User.findById(req.params.id).exec(function(err, response){
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },

    createUser: function(req, res, next){
      var newUser = new User(req.body);
      newUser.save(function(err, response){
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },
    updateUser: function(req, res, next){
      User.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    },
    deleteUser: function(req, res, next){
      User.findByIdAndRemove(req.params.id, function(err, response){
        if(err){
          res.status(500).json(err);
        } else{
          res.status(200).json(response);
        }
      });
    }



};
