let cars = [
    {
        title: "Model X",
        price:  112590,
        image:  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcincodias.elpais.com%2Fcincodias%2F2021%2F05%2F06%2Fmotor%2F1620314670_167195.html&psig=AOvVaw2Kgf3GwvbvrX9bK704IADz&ust=1670947673658000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODG-aS79PsCFQAAAAAdAAAAABAE",
        color: "White",
        imageDetails:   "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0121-b89c9f40d202212090814",
        peakPower: "1,020 hp",
        milesPerSec: "9.9s",
        acceleration: "3.8sec",
    },
    {
        title: "Model S",
        price:  96590,
        image:  "https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD",
        color: "red",
        imageDetails:   "https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop",
        peakPower: "1,020 hp",
        milesPerSec: "1.99s",
        acceleration: "3.8sec",
    },
    {
        title: "Model 3",
        price:  40390,
        image:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD",
        color: "red",
        imageDetails:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/9a77958a-146d-40de-8a5f-0ba8af777fdf/bvlatuR/std/2560x1440/Model-3-Interior-Hero-Desktop-LHD",
        peakPower: "1,050 hp",
        milesPerSec: "1.99s",
        acceleration: "3.1sec",
    },
    {
        title: "Model Y",
        price:  58190,
        image:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/91abd4c7-32a1-41cc-ade5-b64774dbea61/bvlatuR/std/2880x1800/Model-Y-Main-Hero-Desktop-Global?quality=auto-medium&amp;format=auto",
        color: "darkgrey",
        imageDetails:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/bdc14e4a-2d66-4af4-ab77-6d28cd92a8c0/bvlatuR/std/1920x1080/Model-Y-Utility-B-Desktop-LHD-NA?quality=auto-medium&amp;format=auto",
        peakPower: "1,020 hp",
        milesPerSec: "1.4s",
        acceleration: "3.5sec",
    },
]

require ('dotenv').config()
require('../../config/database')
const Car = require('../Cars')

cars.forEach(elemento =>{
    Car.create({
    title:elemento.title,
    price: elemento.price,
    image:elemento.image,
    color:elemento.color,
    imageDetails: elemento.imageDetails,
    peakPower: elemento.peakPower,
    milesPerSec: elemento.milesPerSec,
    acceleration: elemento.acceleration
})
})