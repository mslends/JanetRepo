const Order = require("../models/orderModel.js");

module.exports = {
  getOrders: (req, res, next)=>{
    Order.find().exec((err, response)=>{
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  },

  getOrder: (req, res, next)=>{
    order.findById(req.params.id).exec((err, response)=>{
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  },

  createOrder: (req, res, next)=>{
    var newOrder = new Order(req.body);
    newOrder.save((err, response)=>{
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  },

  updateOrder: (req, res, next)=>{
    Order.findByIdAndUpdate(req.params.id, req.body, (err, response)=>{
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  },

  deleteOrder: (req, res, next)=>{
    Order.findByIdAndRemove(req.params.id, (err, response)=>{
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response);
      }
    });
  }




}// end of module.exports
