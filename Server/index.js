
       // created basic api and connected with angular

// const http=require('http');
// const express=require('express');
 
// const app = express() 
// var cors = require('cors');
// const data=require('./data')
// app.use(cors());
// app.use(express.json())

 

// http.createServer((req,res)=>{
// res.writeHead(200);
// res.write(JSON.stringify(data));
// res.end();
// }).listen(5000)

 
 
    //connected database with angular through API
const express=require('express');
const connection=require('./config');
var cors = require('cors');

const app=express();
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    connection.query("select * from users ",(err,result)=>{
       if(err){
         res.send("error")
       }else{
        // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")
         res.send(result)
      
       }
    })
});

app.post('/',(req,res)=>{
  const data=req.body;
  connection.query('Insert Into users set ?',data,(error,result,fields)=>{
    if(error){
      res.send("error")
    }else{
     // res.setHeader([{"Accept": "application/json"}, {"Content-Type": "application/json"},{"Access-Control-Allow-Origin": "http://localhost:4200"}, ])
      res.send(result)
    }
  })
})

app.listen(5000)