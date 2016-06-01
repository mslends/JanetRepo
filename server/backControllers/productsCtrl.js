var Product = require("../models/productsModel.js");

module.exports = {
  getProducts: function(req, res, next){
    Product.find().exec(function(err, response){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  },

  getSingleProduct: function(req, res, next){
    Product.findById(req.params.id).populate("Products").exec(function(err, response){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  },

  createProduct: function(req, res, next){
    var newProduct = new Product(req.body);
    newProduct.save(function(err, response){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  },

  updateSingleProduct: function(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  },

deleteSingleProduct: function(req, res, next){
  Product.findByIdAndRemove(req.params.id, function(err, response){
    if(err){
      res.status(500).json(err);
    } else{
      res.status(200).json(response);
    }
  });
}














};
