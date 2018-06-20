const http = require('http');
const portti = 3000;
const osoite = "127.0.0.1";
const palvelin = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hoi maailma');
});
palvelin.listen(portti, osoite, function () {
    console.log(`Käynnissä: http://${osoite}:${portti}/`);
});
