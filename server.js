const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n',function(err){
       if(err) throw err;
       console.log('saved!');
    });
    next(); 
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

hbs.registerHelper('getCurrentYear',()=>{
return new Date().getFullYear();
});

hbs.registerHelper('screamit',(text)=>{
return text.toUpperCase();
});
app.get('/', (req, res) => {
    res.render('home.hbs', {
      pageTitle: 'Home Page',
      welcomeMessage: 'Welcome to my website',
    });
  });

// app.get('/', (request, response)=>{
// //response.send('<h1>hello express<h1>');
// response.send({
//     name: 'Adnan',
//     likes:[
//         'Biking',
//         'Cities'
//     ]
// });
// });
app.get('/about',(req,res)=>{
res.render('about.hbs',{
    pageTitle: 'About Page',
});
});

app.get('/bad',(req,res)=>{
    res.send({
        status: 404,
        error: "page not found"
    });
})
app.listen(3000,()=>{
    console.log('server is up on port 3000');
});