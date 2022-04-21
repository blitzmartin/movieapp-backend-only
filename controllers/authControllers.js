const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const initialize = require('../config/passport-conf')
const passport = require('passport')

initialize(passport);

// Loads registration page
async function showRegister (req, res) {
    res.send('REGISTER PAGE');
};


// Creates user
const createUser = async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await userModel.create({
            username: req.body.username, 
            password: hashedPassword 
        });
        res.send('Registered User');
    } catch (err) {
        console.log(err)
    }
};

// Loads login page
const showLogin = function (req, res) {
    res.send('LOGIN PAGE');
}

// Checks if user has an account and if the password is correct
const findUser = async (req, res) => {
    passport.authenticate('local',{
        successRedirect: '/user',
        failureRedirect: '/auth/login'
    })(req, res);
}


// Logs user out of session
function logOut (req, res) {
    req.logOut
    res.clearCookie("connect.sid", { path: "/" });
  
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/')
    });
}



module.exports = { showRegister, createUser, showLogin, findUser, logOut };