// get the http module:
var http = require ('http');

// fs module allows us to read and write content for responses!!
var fs = require ('fs');

// Create a server w/ http module:
var server = http.createServer(function (request, response) {
    //see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do ROUTING:
    if(request.url ==='/'){
        fs.readFile('index.html', 'utf8', function(errors, contents){
            response.writeHead(200,{'Content-type': 'text/html'});
            response.write(contents);
            response.end("End of Index.HTML Response.");
        });
    }
    else if(request.url==='/ninjas'){
        fs.readFile('ninjas.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end("End of the Ninjas.HTML response object.")
        });
    }
    else if(request.url==='/dojos/new'){
        fs.readFile('dojos.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end("End of the Dojos.html response object.");
        });
    }
    else{
        fs.readFile('error.html', 'utf8', function(errors, contents){
            response.writeHead(404, {'Content-type': 'text/html'});
            response.write(contents);
            response.end("Served an Error.html on bad request page to client. Done!")
        });
    }
});


server.listen(6789);


