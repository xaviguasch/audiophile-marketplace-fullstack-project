# audiophile-marketplace-fullstack-project

# Notes

This is a very rudimentary first version of an audiophile marketplace to buy and sell hi-fi equipment.

A new version is being done concurrently that includes Next.js and React for the frontend and a complete backend redo.

Here you can check out the frontend repository (work in progress, styling for mobile at the moment):

[new frontend repo](https://github.com/xaviguasch/kubler-audio-e-commerce-fullstack-project--frontend)

This was a demo version to showcase the most basic features of the project. Will link to the 2.0 version very soon.

# Install

`npm install`

---

# Run

`npm start`

---

# Things to add

- At the moment you see a feed of items (READ), add items to sell (CREATE), delete them (DELETE) and buy items (PUT) someone else has put on the marketplace. Once an item is bought, it doesn't appear on the feed anymore.
- We have pending a working cart adding all the items bought.

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---
