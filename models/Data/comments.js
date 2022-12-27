let Comments = [ 
    {
        'comment': 'This show is the most amazing show in the fucking world',
        'userId': '6381190f47f751965ea55027',
        'photo': 'https://quotetheanime.com/wp-content/uploads/2021/10/Biscuit-Olivaaa-1-1024x576.jpg',
    },
    {
        'comment': 'This show is the most amazing show in the fucking world',
        'userId': '6381190f47f751965ea55027',
        'photo': 'https://quotetheanime.com/wp-content/uploads/2021/10/Biscuit-Olivaaa-1-1024x576.jpg',
    },
    {
        'comment': 'This show is the most amazing show in the fucking world',
        'userId': '6381190f47f751965ea55027',
        'photo': 'https://quotetheanime.com/wp-content/uploads/2021/10/Biscuit-Olivaaa-1-1024x576.jpg',
    },
]
require('dotenv').config()
require('../../config/database')
const Comment = require('../Comments')

Comments.forEach(elemento=> {
    Comment.create({
        comment:elemento.comment,
        userId: elemento.userId,
        photo: elemento.photo
    })
})