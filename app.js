const hostname = "localhost";
const port = 3000;
const DATABASE_URI = "mongodb+srv://javidsadiglimongodbclusters:N77iHw5DYi8ghjXP@simpleauthcluster.cyiedpu.mongodb.net/authdatabase?retryWrites=true&w=majority";

const mongoose = require("mongoose");
const express = require("express");
const body_parser = require("body-parser");
const path = require("path");
const session = require("express-session");
const connect_mongodb = require("connect-mongodb-session")(session);

const console_controller = require("./controllers/console");
const error_controller = require("./controllers/error");

const app = express();
const store = new connect_mongodb({
    uri : DATABASE_URI, 
    collection : "sessions"
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(body_parser.urlencoded({extended : false}));
app.use(express.static(path.join(path.dirname(require.main.filename), 'public')));
app.use(session({secret : "mysecret", saveUninitialized : false, resave : false ,store : store}));


app.use(console_controller.LOG_Request);

app.use(console_controller.LOG_Not_Found);
app.use(error_controller.SEND_ERROR);


mongoose.connect(DATABASE_URI).then(function(result)
{
    app.listen(port, hostname, function()
    {
        console.log(`\n\nServer successfully started at ${hostname}:${port}\n`);
    })
});

