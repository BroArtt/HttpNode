const http = require("http");
const fs = require("fs");
const Directory = "C:/Users/Hp/source/repos/Http/Http/Html/";
var file = "";
var filePath = "";
http.createServer(function (request, response) {

    if (request.url == "/") {
        file = "index.html"
    } else {
        file = request.url.substr(1);
    }

    filePath = Directory + file;
    fs.access((filePath), fs.constants.R_OK, err => {
               if (err) {
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            fs.createReadStream(filePath).pipe(response);
        }
    });
}).listen(3000, function () {
    console.log("Server started at 3000");
});