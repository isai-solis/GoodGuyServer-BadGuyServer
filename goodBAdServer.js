var http = require("http");
var port1 = 7000;
var port2 = 7500;

function handleRequest1(request, response){
    response.end("Hello there! Remember that you are beautifully unique.");
}
function handleRequest1(request, response){
    response.end("OMG, your face is so punchable.");
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(port1, function(){
    console.log("Server listening on: http://localhost:%s", port1);
});
server2.listen(port2, function(){
    console.log("Server listening on: http://localhost:%s", port2);
});