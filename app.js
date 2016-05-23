var express=require('express');
var path=require('path');
var morgan=require('morgan');
var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/zhufengshop');
var parser=require('body-parser');
var users=require('./routes/users')
var app=express();

app.use(morgan('tiny'));
//使用静态文件服务器中间件
app.use(express.static(path.join(__dirname,'app','public')));
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
//设立路由
app.use('/users',users);
app.listen(8080);
console.log('listen on port 8080');