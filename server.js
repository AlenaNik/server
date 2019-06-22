// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
//
//
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
//
// app.get('/', (req, res) => {
//     res.send("getting root here");
// });
//
// app.get('/profile', (req, res) => {
//     res.send("getting profile");
// });
//
//
// app.post('/profile', (req, res) => {
//     console.log(req.body);
//     res.send('success');
// });
//
//
// app.listen(8001);
//
// //

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(express.static(__dirname + '/public'))

app.listen(8003);