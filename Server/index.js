
       // created basic api and connected with angular

// const http=require('http');
// const express=require('express');
// const app = express()
// const data=require('./data')
// http.createServer((req,res)=>{
// res.writeHead(200,{'content-type':'application\json', 'Access-Control-Allow-Origin':'http://localhost:4200'});
// res.write(JSON.stringify(data));
// res.end();
// }).listen(5000)

 
    //connected database with angular through API
const express=require('express');
const connection=require('./config');
const app=express();
app.get('/',(req,res)=>{
    connection.query("select * from contacts ",(err,result)=>{
       if(err){
         res.send("error")
       }else{
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")
         res.send(result)
      
       }
    })
});app.listen(5000)