var Db = require('./dboperations');
var Employee = require('./Employee');
var dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next)=>{
console.log('middleware');
next();
})




var port = process.env.PORT || 4500;
app.listen(port);
console.log("Employee API is running at" + port)