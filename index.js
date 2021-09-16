const http = require('http');
const query = require('querystring');
const server =  http.createServer((request,response) => {
    
    

    if(request.method === 'GET')
    {
        /* Write code for GET request */
        const userData  =  query.parse(request.url.replace('/?',''));
        const username = userData.username;
        const password = userData.password;
        if(username === "saurabh" && password === '1234')
        {
            response.writeHead(200,{'Content-Type' : 'application/json'});
            const massage = JSON.stringify({"massage" : "user authorised !"});
            response.write(massage);
        }
        else{
            response.writeHead(401,{'Content-Type' : 'application/json'});
            const massage = JSON.stringify({"massage" : "user unauthorised !"});
            response.write(massage);
        }

        response.end();
        
    }

    else{

        /* write code for (if request is post) post */
        let userData = "";
        request.on('data', (chunks) => {
            userData += chunks.toString();
        });

        request.on('end', () => {
           userData = query.parse(userData);
           const username = userData.username;
           const password = userData.password;
           
           if(username === "saurabh" && password == 1234)
           {
                response.writeHead(200,{'Content-Type' : 'application/json'});
                const massage = JSON.stringify({"massage" : "use authorized !"});
                response.write(massage);
                
           }
           else
           {
                response.writeHead(401,{'Content-Type' : 'application/json'});
                const massage = JSON.stringify({'massage' : 'user unautorized !'});
                response.write(massage);
                
           }
        });

       
        
    }

   
});

server.listen(8080);