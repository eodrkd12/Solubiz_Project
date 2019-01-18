/*var json = '{"Humidity":"34.5", "Temperature":"24.0", "Time":"' + Date().toString() + '"}';
//var json = '{ "NAME" : "Yongwoo", "AGE" : 25, "UNIVERSITY" : "Catholic Univ, of Korea", "MAJOR" : "Computer Science" }';

var jsonObj = JSON.parse(json);

for (var obj in jsonObj) {
    console.log(obj + ' : ' + jsonObj[obj]);
}*/
var mysql = require('mysql');

var pool = mysql.createPool({
    host: '127.0.0.1',      // DB 접속 IP 주소
    port: 3306,             // DB 접속 PORT 번호
    user: 'root',           // DB 접속 ID
    password: '1q2w3e4r',   // DB 접속 Password
    database: 'Web',        // 접속 DB명
    connectionLimit: 2,     // DB 동시 접속 허용 수
    queueLimit: 100,        // DB 대기 Queue 허용 수
});

module.exports = pool; // 한 가지 모듈을 계속 사용하기 위한 pool
/*module.exports = (function () {
    return {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '1q2w3e4r',
        database: 'Web',
        connectionLimit: 100,
        queueLimit: 100,
        multipleStatements: true
    }
})();*/