const Comments = require ("../models/Comments")

const controller = {
    read : async(req,res)=>{

        try {
           let allcomments = await Comments.find()
           if(allcomments){
            res.status(200).json({
                allcomments,
                success:true,
                message:"Comments were successfully found"
            })
           }else{
            res.status(404).json({
                success: false,
                message: "No comment was found",
              })
           }
    
        } catch (error) {
            console.log(error);
        }
    },
    create:  async(req,respuesta) => { 

        try {
            let new_comment = await Comments.create(req.body)
            respuesta.status(201).json({
                id: new_comment._id,
                success: true,
                new_comment,
                message: "el comentario se creó satisfactoriamente"
            })
        } catch(error) {
            respuesta.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    deleted: async(req,res)=>{
        let {id} = req.params
        try {
          let uno = await Comments.findOneAndDelete({_id: id})
      if(uno){
        res.status(200).json({
          id: uno._id,
          success: true,
          message: "el comentario se elimino satisfactoriamente"
        })
      }else{
        res.status(404).json({
          success: false,
          message: "el comentario no se encontro"
        })
      }
        } catch (error) {
          res.status(400).json({
            success:false,
            menssage:error.message
          })
      
        }
      },
}


module.exports = controller