const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Item, Review} = require('../models')


router.get('/', (req,res)=>{
    console.log(req.session)
    Item.findAll({
        attributes: [
            'id',
            'name',
            'url',
            'item_text'
        ],
        include:{
            model: User,
            attributes:['username']
        }
    })
    .then(itemData =>{
        console.log(itemData)
        const items = itemData.map(item=> item.get({plain: true}))
        res.render('homepage', {items})
    })
    .catch(err=>{
    console.log(err)
    })
})


router.get('/login',(req,res)=>{
    if(req.session.LoggedIn){
        res.redirect('/');
        return
    }
    
    res.render('login')
})



router.get('/logout',(req,res)=>{
    if(req.session.LoggedIn){
     req.session.destroy(()=>{
         res.status(204).end()
     });
    }else{
        res.status(404).end
    }
})

router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})
module.exports = router;