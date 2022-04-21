const moviesModel = require("../models/moviesModel");


// Loads homepage for logged user 
function showUserIndex (req, res) {
  moviesModel.find({})
  .then(data => {
    res.render('user-home', {movies: data, name: req.user.username}); 
  })
  .catch((err)=>{
    console.log(err);
  })
}


// Loads watchlist page
function showWatchlist (req, res) {
  moviesModel.find({})
  .then(data => {
    res.render('watchlist', {movies: data}); 
  })
  .catch((err)=>{
    console.log(err);
  })
}


// Adds movie to watchlist
const addToWatchlist = function (req, res) {
  res.redirect('/user/watchlist') //only for testing reason
}


// Deletes movie from watchlist by Id // watchlistModel DOES NOT EXIST FOR NOW
const deleteFromWatchlist = function (req, res) {
  watchlistModel.findByIdAndRemove({_id: req.params.id})
  .then(data => {
      if(!err) {
          res.redirect('/user/watchlist');
      }
  })
  .catch((err)=>{
    console.log(err);
  })
}

module.exports = { showUserIndex, showWatchlist, addToWatchlist, deleteFromWatchlist};










//FIRST APPROACH WITH ASYNC FUNCTION
/* async function showHomepage (req, res) {
    try{
        const data = await moviesModel.find({}).select('poster');
        res.render('index', {movies: data});
    } catch(err) {
        console.log(err)
    }
}; */

//THIS IS TO FILTER OBJECT: moviesModel.find({}).select('poster')






