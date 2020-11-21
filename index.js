const http = require('http')
const soap = require('soap')
const express = require('express')
const bodyParser = require('body-parser')
var myService = {
    MyService: {
        MyPort: {
            UserFunction: function(args) {
                console.log(args)
                return {
                    email: args.email
                };
            },
        },
        MyPortTeacher:{
            TeacherFunction:function(args){
                return;
            }
        }
    },
    
};

var xml = require('fs').readFileSync('wsdl.wsdl', 'utf8');

//http server example
var server = http.createServer(function(request,response) {
    response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
soap.listen(server, '/wsdl', myService, xml, function(){
  console.log('server initialized');
});
const app = express()
const port = 3000

app.get('/teachers', (req, res) => {
    soap.createClient("http://localhost:8000/wsdl?wsdl", function(err, client) {
        client.TeacherFunction(arg, function(err, result) {
            res.send(result)
        });
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

