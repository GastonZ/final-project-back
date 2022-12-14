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
     if (req.query.name) {
       query = { name: { $regex: req.query.name, $options: "i" } };
     }
     if (req.query.continent) {
       query = {
         ...query,
         continent: req.query.continent.split(","),
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

   update: async (req, res) => {
     let query = {};
     let id = req.user.id;

     if (req.query.shopId) {
       query = {
         shopId: req.query.shopId,
       };
     }

     if (req.query.name) {
       query = {
         ...query,
         name: req.query.name,
       };
     }
     try {
       let items = await Items.findOne(query);
       if (items) {
         if (items.userId.includes(id)) {
           await Items.findOneAndUpdate(
             { _id: items._id },
             { $pull: { userId: id } },
             { new: true }
           );
           res.status(200).json({
             name: items.name,
             message: `Event dis${items.name}`,
             success: true,
             showed: false,
           });
         } else {
           await Items.findOneAndUpdate(
             { _id: items._id },
             { $push: { userId: id } },
             { new: true }
           );
           res.status(200).json({
             name: items.name,
             message: `Event ${items.name}`,
             success: true,
             showed: true,
           });
         }
       } else {
         res.status(404).json({
           message: `The item doesn´t exist in the shopping cart`,
           success: false,
         });
       }
     } catch (error) {
       res.status(400).json({
         message: error.message,
         success: false,
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
         { path: "userId", select: "name photo -_id" },
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