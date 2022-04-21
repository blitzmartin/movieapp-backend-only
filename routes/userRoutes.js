const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

router.get('/', isLoggedIn, userControllers.showUserIndex);
router.get('/watchlist', isLoggedIn, userControllers.showWatchlist);
router.post('/watchlist', isLoggedIn, userControllers.addToWatchlist);
router.delete('/watchlist/:id', isLoggedIn, userControllers.deleteFromWatchlist);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
}

module.exports = router;