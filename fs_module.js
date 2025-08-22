const fs = require("fs");
const http = require("http");
fs.writeFile("sample.txt","Hello this is a sample text file",(err)=>{
    if (err) throw err;
    console.log("File Created");
});

fs.readFile("sample.txt",(err,data)=>{
    if (err) throw err;
    console.log(data.toString());
})

fs.readFile("home.html",(err,home) => {
    if (err) {
        throw err;
    }

    http
        .createServer((request,response)=>{
        response.writeHeader(200, {"content-type" : "text/html"});
        response.write(home);
        response.end()
    })
    .listen(3000);
});
