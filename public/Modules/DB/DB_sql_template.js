//var pool = require('./db_connect');

alert("오픈");
var pool = require('../../../config/db_config');

pool.on('connection', function (connection) {
	console.log('연결');
});

pool.on('enqueue', function () {
	console.log('큐');
});
function al(){
	alert("알람");
}
function select() {
	//var test = function (req, res) {
	pool.getConnection(function (err, con) {
		var sql = 'select * from shelf';

		con.query('select * from shelf', function (err, result) {
			con.release();
			if (err) console.log(err);
			else {
				console.log(result);
				alert(result);
			}

		});
	});
}
//}
//test;
select();

pool.getConnection(function (err, con) {
	con.query('select * from shelf', 
			function (err, result, fields) {
		con.release();
		if (err) console.log(err);
		else {
			console.log(result);
		}

	});
});

pool.getConnection(function (err, con) {
	//var sql = 'select * from shelf';
	con.query('select * from shelf', function (err, result, fields) {
		con.release();
		if (err) console.log(err);
		else {
			console.log(result);
		}

	});
});



/*pool.getConnection(function(err,con){
	var sql = 'INSERT INTO shelf VALUES ("1")';

	con.query(sql,function(err,result,fields){
		//con.release();
		if(err) console.log(err);
		else{
			console.log('성공');
		}
	});
	pool.end((err)=>{
		if(err) console.log(err);
		else console.log ('연결해제');
	});
});*/
// pool.getConnection(callback)안에 저런식으로 코딩해서 원하는 결과 가져오기.
