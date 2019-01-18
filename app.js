var express = require('express');
var logger = require('morgan');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.locals.pretty = true;

app.use(express.static('public'));
app.use(express.static('css'));
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/test', (req, res) => {
    res.sendfile('./test.html');
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.route('/gatewaylog')
    .get((req, res) => {
        res.render('index');
    })
    .post((req, res) => {
        var gId = req.body.gId;
        var Humidity = req.body.Humidity;
        var Temperature = req.body.Temperature;
        var date = req.body.date;

        console.log(// DB에 넣으면 됨
            'gId : ' + gId +
            '\nHumidity : ' + Humidity +
            '\nTemperature : ' + Temperature +
            '\ndate : ' + date
        );
        res.render('index');
    });

app.get('/jade', (req, res) => {
    res.render('index');
});
app.get('/index', function (req, res) {
    res.sendfile('public/test.html');
});
console.log(__dirname);

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
});


app.post('/form_receiver', function (req, res) {

    var title = req.body.title;                // 문제발생을 해결하기 위해 body-parser설치 필요

    var description = req.body.description;

    res.send(title + ',' + description);

});


/* css 파일 붙이기 */


app.listen(3000, function () {
    console.log('3000번' + Date());
});