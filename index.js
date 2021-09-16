const http = require("http");
const queryString = require("querystring");
const server = http.createServer((request,response) => {

    let allData = "";
    request.on("data",(chunks) => {
        allData += data;
    });

    request.on("end", () => {
        const final = queryString.parse(allData);
        response.end();
    });
    
});
server.listen(8080);