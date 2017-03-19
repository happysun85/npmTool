var express = require('express');
var path = require('path');
var serveStatic = require('serve-static'); //指定静态路径
var app = express();
var bodyParser = require('body-parser');   //将表单数据格式化
var ejs = require('ejs');

app.use(serveStatic('bower_components'));
app.use(express.static(path.join(__dirname, 'src')));

var port = 3000;
app.listen(port);

//页面
app.set('views', path.join(__dirname, 'src/views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');//设置使用的模板引擎

require('./app/router')(app);
