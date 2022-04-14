const express=require('express');
const mysql=require('mysql');
const myconn=require('express-myconnection');
const routes=require('./routes')

const app=express();
const dbOptions={
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456',
    database:'library'
}


//middlewares:
app.use(myconn(mysql,dbOptions, 'single'));
app.use(express.json())



// Es la configuracion
app.set('port',process.env.PORT || 9000)

//Donde esta el puertooo
app.listen(9000, ()=>{
    console.log('esta corriendo en el puerto',app.get('port'))
})



// Server runni 
// app.get('/', (req,res)=>{
//     res.send('welcome to mi api');

// })

app.use('/', routes )