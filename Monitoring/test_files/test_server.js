const express=require('express');
const app=express();
const fs=require('fs');

app.listen(3303, function() {
    console.log("server start");
});

app.get('/',function(req,res){
    fs.readFile('test_main.html',function(error,data){
        if(error){
            console.log("error");
        }
        else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(data);
        }
    })
})
