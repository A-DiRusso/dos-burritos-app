
const http = require('http');
const Burrito = require('../models/burrito');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( async (req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/burrito') {
        const burritos = await Burrito.getAll();
        const burritosJSON = JSON.stringify(burritos);
        res.end(burritosJSON);
    } else {
        res.end(`{message: "Viva los Burritos, per semepre!}`)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});