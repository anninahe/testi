var express = require('express');
var app = express();

// app.get('/teksti', function (req, res) {
//     res.send('Hello Node with Express');
// })

app.use(express.static('files'));

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Now listening at http://%s:%s", host, port)
});
