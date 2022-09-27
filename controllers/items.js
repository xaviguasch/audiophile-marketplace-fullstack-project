const cloudinary = require('../middleware/cloudinary')
const Item = require('../models/Item')

module.exports = {
  getProfile: async (req, res) => {
    try {
      const items = await Item.find({ user: req.user.id })
      res.render('profile-2.ejs', { items: items, user: req.user })
    } catch (err) {
      console.log(err)
    }
  },
  getFeed: async (req, res) => {
    try {
      const items = await Item.find({ bought: false }).sort({ createdAt: 'desc' }).lean()
      res.render('feed-2.ejs', { items: items })
    } catch (err) {
      console.log(err)
    }
  },
  getItem: async (req, res) => {
    try {
      const item = await Item.findById(req.params.id)
      res.render('item.ejs', { item: item, user: req.user })
    } catch (err) {
      console.log(err)
    }
  },
  createItem: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path)

      await Item.create({
        name: req.body.name,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        price: req.body.price,
        user: req.user.id,
        bought: false,
      })
      console.log('Item has been added!')
      res.redirect('/profile-2')
    } catch (err) {
      console.log(err)
    }
  },
  buyItem: async (req, res) => {
    try {
      await Item.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: { bought: true },
        }
      )
      console.log('Item bought!')

      // adding to cart, feature pending

      res.redirect(`/item/${req.params.id}`)
    } catch (err) {
      console.log(err)
    }
  },
  deleteItem: async (req, res) => {
    try {
      // Find item by id
      let item = await Item.findById({ _id: req.params.id })
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(item.cloudinaryId)
      // Delete item from db
      await Item.remove({ _id: req.params.id })
      console.log('Deleted Item')
      res.redirect('/profile-2')
    } catch (err) {
      res.redirect('/profile-2')
    }
  },
}
