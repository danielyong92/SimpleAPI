var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.listen(5000, function () {
    console.log("listening on port 5000");
})

const flash = require('express-flash');
app.use(flash());

//mongoose stuff
require('./server/config/mongoose.js');

//routes
require('./server/config/routes.js')(app);

