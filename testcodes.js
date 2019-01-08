const express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
res.send({
    name: 'Adnan',
    likes:[
        'Biking',
        'Cities'
    ]
});
});


app.get('/about',(req,res)=>{
    res.send('about');
    });

app.listen(3000);