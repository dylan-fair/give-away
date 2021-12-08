const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Item, Review} = require('../models')


router.get('/', (req,res)=>{
    console.log(req.session)
    Item.findAll({
        include:{
            model: User,
            attributes:['username']
        }
    })
    .then(itemData =>{
        console.log(itemData)
        const items = itemData.map(item=> item.get({plain: true}))
        res.render('homepage', {
            items,
            loggedIn: req.session.loggedIn
        })
    })
    .catch(err=>{
    console.log(err)
    })
})


router.get('/login',(req,res)=>{
    if(req.session.loggedIn){
        res.redirect('/');
        return
    }
    
    res.render('login')
})



router.get('/logout',(req,res)=>{
    if(req.session.loggedIn){
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

module.exports = router;