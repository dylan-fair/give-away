const router = require('express').Router()
const sequelize = require('../config/connection');
const { Item, User, Review} = require('../models');


router.get('/', (req,res)=>{
    console.log('Hello')
    Item.findAll({
        where:{
          user_id: req.session.user_id
        },
        attributes: [
            'id',
            'name',
            'url',
            'item_text',
        ],
        include:{
            model: User,
            attributes:['username']
        }
    })
    .then(itemData =>{
        console.log(itemData)
        const items = itemData.map(item=> item.get({plain: true}))
        res.render('dashboard', {items})
    })
    .catch(err=>{
    console.log(err)
    })
})


module.exports = router;