const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const homeController = require('../controllers/home')
const itemsController = require('../controllers/items')
// const postsController = require('../controllers/posts')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Main Routes - simplified for now
router.get('/', homeController.getIndex)
router.get('/profile-2', ensureAuth, itemsController.getProfile)
// router.get('/profile', ensureAuth, postsController.getProfile)
router.get('/feed-2', ensureAuth, itemsController.getFeed)
// router.get('/feed', ensureAuth, postsController.getFeed)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router
