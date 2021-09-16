const { Console } = require("console");
const http = require("http");
const query = require("querystring");
const server = http.createServer((request,response) => {

    let allData = "";
    request.on("data",(chunks) => {
        allData += chunks.toString();
    });

    request.on("end", () => {
        let final = query.parse(allData);
        if(final.username === "saurabh" && final.pass === "raju")
        {
            //response.write("success !");
            response.writeHead(200,{"Content-Type": "application/json",
            });
            let massage = JSON.stringify({massage : "login Success !"});
            response.write(massage);
        }
        else{
            response.writeHead(401,{"Content-Type" : "application/json"})
            let massage = JSON.stringify({massage : "login Faild !"});
            
            response.write(massage);
        }
        response.end();
    });
    
});
server.listen(8080);