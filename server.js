const http = require('http');

const server = http.createServer(function (require, response) {

    if(require.url == '/oi'){
        response.end(`
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width inicial-scale=1.0">
                    <title> Testando forma de node </title>
                </head>
            
                <body>
                    <h2>
                        Oi pra voce tambem meu brother 
                    </h2>
                </body>
            
            </html>
        `);
    }
    if (require.url == '/') {
        response.end(`
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width inicial-scale=1.0">
                    <title> Testando forma de node </title>
                </head>
            
                <body>
                    <h2>
                       Index
                    </h2>
                </body>
            
            </html>
        `);
    }
});

server.listen(3000);
