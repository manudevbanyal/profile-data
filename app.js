const express = require('express');
const bodyParser= require('body-parser');
const hbs = require('hbs')

        const app = express();

        hbs.registerPartials(__dirname+'/views/partials');

        hbs.registerHelper('data',()=>{
           return 'DEVELOPERS'
        })

        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());

        app.set('view engine','hbs');
        app.set('views',__dirname+'/views/');


        app.get('/',(req,res)=>{
            res.render('home')
        });

        app.get('/register',(req,res)=>{
            res.render('register')
        });

        app.post('/info',(req,res)=>{

            let user = req.body;
            res.render('info',{user:user})

            
            
        });

app.listen(3000,()=>{
    console.log('server started')
})