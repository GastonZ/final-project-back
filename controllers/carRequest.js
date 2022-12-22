const CarRequest = require('../models/CarRequest')
const carRequest = require('../models/CarRequest')

 const controller = {

    create: async(req, res) => {
    
    try {
        let new_car_request = await carRequest.create(req.body)
        res.status(201).json({
            id: new_car_request._id,
            success: true,
            message: 'Your request has been submited'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
    
    },

    read: async(req,res) => {

        try {
            let read_request = await CarRequest.find()
            res.status(200).json({
                response: read_request,
                success: true,
                message: 'The cars has been found'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    } 
    
}

module.exports = controller