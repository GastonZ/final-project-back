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
    }
    
}

module.exports = controller