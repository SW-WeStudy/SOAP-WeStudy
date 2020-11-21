const soap = require('soap')
var url = 'http://localhost:8000/wsdl?wsdl';
var args = {"email":"luis@gmail.com"};
soap.createClient(url, function(err, client) {
    client.UserFunction(args, function(err, result) {
        console.log(result.body);
    });
});