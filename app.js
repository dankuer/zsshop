var express=require('express');
var path=require('path');
var morgan=require('morgan');
var app=express();

app.use(morgan('tiny'));
//使用静态文件服务器中间件
app.use(express.static(path.join(__dirname,'app','public')));

app.listen(8080);
console.log('listen on port 8080');