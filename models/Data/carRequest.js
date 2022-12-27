let CarRequests = [
    {
        car_model: "Model 3P",
        request: "Quiero probar un auto",
        user_name: "Gaston ",
        car_photo: "https://www.bugatti.com/fileadmin/_processed_/sei/p322/se-image-9001f5f7ae5cbec89f2ece1f7b98ba4d.webp",
        user_email: "tperaltazappula24@gmail.com",
        userId: "639bd752585a2538839b60c1"
    }
]


require('dotenv').config()
require('../../config/database')
const CarRequest = require('../CarRequest')

CarRequests.forEach(elemento =>{
    CarRequest.create({
        car_model: elemento.car_model,
        request: elemento.request,
        user_name: elemento.user_name,
        user_email: elemento.user_email,
        userId: elemento.userId,
        car_photo: elemento.car_photo
    })
})