let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let app = express();        //实例化express

//拦截请求信息打印在控制台
app.all('/*', function(req, res, next){
    console.log("收到来自："+req.headers.referer+"的请求："+req._parsedUrl.pathname);
    next();
});
app.use('/comments/getComments',function(req, res){
    res.json(Mock.mock({
        'status': 200,
        'dataSource|1-9':[{
            'key|+1': 1,
            'mockTitle|1':['肆无忌惮'],
            'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    }))
});

//跨域响应头
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.listen('8090', () => {
    console.log('监听端口 8090');
});