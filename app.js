// Require modules
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//NEW modules
const passport = require('passport');
const methodOverride = require('method-override');
const flash = require('express-flash');
const session = require('express-session');

// Require routes
const publicRouter = require('./routes/publicRoutes');
const authRouter= require ('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');



// Connect to MongoDB server on port 27017 and database
dotenv.config();
mongoose.connect(process.env.DB_SERVER)
.then(() => console.log('Connected to DB server...'))
.catch((err) => console.log(err));


// Create server
const app = express();

//NEW express session
app.use(flash());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60 * 60 * 1000}
}))

// Set views and public folders and use body parser
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));


//NEW use passport
app.use(passport.initialize());
app.use(passport.session());

// Use routes
app.use('/', publicRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);

// Server running
const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.listen(port, hostname, (err) =>{
    if(err){
        return console.log('Something went wrong: ' + err);
    } else {
        console.log(`Server running on port ${port}...`)
    }
})