const http = require('http');
const url = require('url');

const port=8200;

const server = http.createServer((req, res) => {
    res.write(`Server is running on port ${port}\n`);
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    let text="";
    Object.entries(queryObject).forEach((par) => text += 
        (par[0]+": "+par[1]+"\n"));
    res.write(`param received: ${text}`);
    res.end();
}).listen(port);