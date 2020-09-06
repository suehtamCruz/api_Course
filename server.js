const http = require('http');

const server = http.createServer(function (require,response) {
    response.end(`
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width inicial-scale=1.0">
                <title> Testando forma de node </title>
            </head>
        
            <body>
                <h2>
                    Matheus é lindao
                </h2>
            </body>
        
        </html>
    `);
});
server.listen(3000);
