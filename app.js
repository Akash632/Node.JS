const express = require('express');

//express app

const app = express();

//regitering ejs as default engine

app.set('view engine','ejs');
//listen for requests

app.listen(3003);

app.get('/',(req,res)=>{
    // res.send('<p>Home page</p>')
    // res.sendFile('./views/index.html',{root: __dirname});
    const blogs = [
        {title: 'Yoshi finds eggs',snippet: 'Lorem ipsum dolor sit amet, consectetur'},
        {title: 'You find eggs',snippet: 'Lorem ipsum dolor sit amet, consectetur'},
        {title: 'How to defaeat browser',snippet: 'Lorem ipsum dolor sit amet, consectetur'},
    ]
    res.render('index',{title: 'Home', blogs});
})
app.get('/home',(req,res)=>{
    // res.sendFile('./views/index.html',{root: __dirname});
    res.render('index',{
        title: 'Home page',
    })
})
app.get('/about',(req,res)=>{
    // res.sendFile('./views/about.html',{root: __dirname});
    res.render('about',{
        title: 'About page',
    });
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{
        title: 'Create Blog',
    });
})
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })

app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root: __dirname})
    res.status(404).render('404',{
        title: '404',
    });
})
// app.get('/about',(req,res)=>{
//     res.send('<p>About page</p>')
// })