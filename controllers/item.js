const Item = require('../models/Items')

 const controller = {
   create: async (req, res) => {
     try {
       let new_item = await Item.create(req.body);
       res.status(201).json({
         id: new_item._id,
         success: true,
         message: "The item has been created with success",
       });
     } catch (error) {
       res.status(400).json({
         success: false,
         message: error.message,
       });
     }
   },

   read: async (req, res) => {
     let query = {};
     console.log(req.query);
     if (req.query.title) {
       query = { title: { $regex: req.query.title, $options: "i" } };
     }
     if (req.query.unit_price) {
       query = {
         ...query,
         unit_price: req.query.unit_price.split(","),
       };
     }
     try {
       let read_item = await Item.find(query);
       res.status(200).json({
         response: read_item,
         success: true,
         message: "The items has been found",
       });
     } catch (error) {
       res.status(400).json({
         success: false,
         message: error.message,
       });
     }
   },
   destroy: async (req, res) => {
     let { id } = req.params;
     try {
       let oneItem = await Item.findOneAndDelete({ _id: id });
       if (oneItem) {
         res.status(200).json({
           id: oneItem._id,
           success: true,
           message: "The item has been deleted with success",
         });
       } else {
         res.status(404).json({
           success: false,
           message: "The item hasn't been found",
         });
       }
     } catch (error) {
       res.status(400).json({
         success: false,
         message: error.message,
       });
     }
   },
   readId: async (req, res) => {
     let { id } = req.params;
     try {
       let oneItem = await Item.findById(id).populate([
         { path: "userId", select: "title picture_url -_id" },
       ]);
       if (id) {
         res.status(200).json({
           response: oneItem,
           success: true,
           message: "Item recovery succesfully",
         });
       } else {
         res.status(404).json({
           succes: false,
           message: "No item found",
         });
       }
     } catch (error) {
       res.status(400).json({
         success: false,
         message: error.message,
       });
     }
   },
 };


module.exports = controller