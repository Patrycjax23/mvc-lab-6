const express=require('express');
const session=require('express-session');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
const errorRoutes=require('./routes/error');
const userRoutes = require('./routes/user');
const bookRoutes = require('./models/book');
const PORT=3000;

function listeningListener(){
    console.log('Server is running on http://localhost:${PORT}');

}
app.listen(PORT,listeningListener);
app.use(express.static(path.join(__dirname, 'public'))); 
app.set('view engine', 'ejs'); 
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false })); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use("*", errorRoutes);
app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:true,}));