const moviesModel = require("../models/moviesModel");


// Loads homepage for logged user 
function showUserIndex (req, res) {
  moviesModel.find({})
  .then(data => {
    res.json(data, req.user); 
  })
  .catch((err)=>{
    console.log(err);
  })
}


// Loads watchlist page
function showWatchlist (req, res) {
  moviesModel.find({})
  .then(data => {
    res.json(data); 
  })
  .catch((err)=>{
    console.log(err);
  })
}


// Adds movie to watchlist
const addToWatchlist = function (req, res) {
  res.send('WATCHLIST PAGE') //only for testing reason
}


// Deletes movie from watchlist by Id // watchlistModel DOES NOT EXIST FOR NOW
const deleteFromWatchlist = function (req, res) {
  watchlistModel.findByIdAndRemove({_id: req.params.id})
  .then(data => {
      if(!err) {
        res.json(data);
        res.send('WATCHLIST PAGE');
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






