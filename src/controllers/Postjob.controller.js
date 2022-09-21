const express = require('express')

const Post = require('../models/Postjob')
const router = express.Router()

router.post('/postjob', async (req, res) => {
  try {
    const postjob = await Post.create(req.body)
    res.send(postjob)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.get('/postjob', async (req, res) => {
  try {
    const postjob = await Post.find().lean().exec()
    res.send(postjob)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.patch('/postjob/:id', async (req, res) => {
  try {
    const postjob = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.send(postjob)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.delete('/postjob/:id', async (req, res) => {
  try {
    const postjob = await Post.findByIdAndDelete(req.params.id)

    return res.send("deleted successful")
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

module.exports = {router}
