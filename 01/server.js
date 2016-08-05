var http = require("http");
http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("hello nodejs");
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
//在 gitbash 里  来到当前目录下，输入 node server.js   然后在网页输入http://127.0.0.1:1337/访问
//修改完输出内容之后，在gitbash里 ctrl+c 关掉服务， 重新启动，页面才有效果。
