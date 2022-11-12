const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    if(request.url === "/"){
        response.end(JSON.stringify({}));
    }

    if(request.url === "/profile"){
        response.end(JSON.stringify({
            "name": "Sergiu Chilat",
            "address": "mun. Bălți"
        }));
    }

    if(request.url === "/products"){
        if(request.method === "GET"){
            response.end(JSON.stringify(
                [
                    {
                        "name": "Meat",
                        "price": 12
                    },
                    {
                        "name": "Bread",
                        "price": 123
                    }
                ]
            ));
        } else if(request.method === "POST"){
            response.end(JSON.stringify({
                "message": "Product added"
            }))
        } else if(request.method === "PUT"){
            response.end(JSON.stringify({
                "message": "Product updated"
            }))
        } else if(request.method === "DELETE"){
            response.end(JSON.stringify({
                "message": "Product deleted"
            }))
        }else{
            response.end(JSON.stringify({
                "message": "This method is not supported"
            }))
        }
    }
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});