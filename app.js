const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {

    // Allow all origins
    res.setHeader("Access-Control-Allow-Origin", "*");

    if(req.url === "/") {
        fs.readFile("data.txt", "utf8", (error, data) => {
            if(error){
                res.end("Error");
            } else{
                res.end("hi");
            }
        });
    }
    else if(req.url === "/aa") {
        fs.readFile("data.txt", "utf8", (error, data) => {
            if(error){
                res.end("Error");
            } else{
                console.log(data);
                
                res.end(data);
            }
        });
    }
    else {
        res.end("Page Not Found");
    }
});

server.listen(4000, () => {
    console.log("server running on http://localhost:4000");
});