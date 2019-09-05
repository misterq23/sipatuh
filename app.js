var express = require('express');
var session = require('express-session');
var bodyParser = require("body-parser");
var path = require('path');
var axios = require('axios');

var routes = require('./routes');
var MenuController = require('./Controller/MenuController')();

var app = express();

// set the view engine to ejs
app.set('views', path.join(__dirname, 'html'));
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use('/', routes);
app.use("/api/menu", MenuController);

// Set the folder for css & java scripts
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'js')));
app.use(express.static(path.join(__dirname,'vendor')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  // create application/json parser


//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});


app.get('/', async function(req, res) {
  await axios({
     method: `get`,
     url: `http://localhost:2300/api/menu`,
   }).then((response) => {
         console.log(response.data);
         res.render('./login', {data: response.data});
     }).catch((e) => {
           console.log(e);
       });
});

//function logout
app.get('/logout', function(req, res){
//  sess = req.session;
  //  req.session.destroy();
    req.logout(); 
      res.redirect('/');
  });

//Setting up server
var server = app.listen(process.env.PORT || 2300, function () {
  var port = server.address().port;
  console.log("Server is running at localhost:", port);
});
