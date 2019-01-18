var mysql = require('mysql');

var pool = mysql.createPool({
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '1q2w3e4r',
    database : 'Web',
    connectionLimit : 50,
    multipleStatements : true
});


//pool.getConnection
pool.query('select * from shelf', function(err,result){    
    if(err) console.log(err);
    else{
        console.log(result);
    }  
    pool.end((err)=>{
        if(err) console.log(err);
        else console.log('해제');
    });  
});

var sql = 'insert into shelf values(:s_id)';
pool.query('insert into shelf values("test8")',function(err,result){
      
    if(err) console.log(err);
    else {
        console.log('성공');
    }
    pool.end((err)=>{
        if(err) console.log(err);
        else console.log('해제');
    });  
});
