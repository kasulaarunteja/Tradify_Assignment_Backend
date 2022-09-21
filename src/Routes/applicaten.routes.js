const express = require('express')
const { applicant } = require('../models/applicate.model')
var fs = require('fs')
const path = require('path')
const { upload } = require('../controllers/uploadFile')
const Applicants = express.Router()

Applicants.post('/apply', upload.single("resume"), async (req, res) => {
  try {
    const data = await applicant.create({
      FullName: req.body.FullName,
      Email: req.body.Email,
      Experience: req.body.Experience,
      Expected_CTC: req.body.Expected_CTC,
      resume: req.file.filename,
    })
    return res
      .status(201)
      .send({ message: `Data uploaded sucessfully`, status: 201 })
  } catch (error) {
    return res.status(500).send({ message: error.message, status: 500 })
  }
})

Applicants.get('/getApplicants/', async (req, res) => {
  try {
    const data = await applicant
      .find(
        {},
        // { JobID: req.params.id },
        { JobID: 0, createdAt: 0, updatedAt: 0 },
      )
      .lean()
      .exec()

    return res.status(200).send({
      message: `Data fetched Sucessfully`,
      status: 200,
      applicants: data,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, status: 500 })
  }
})
Applicants.get('/getpdf/:name', async (req, res) => {
  try {
    let filePath = path.join(
      __dirname,
      `../controllers/uploads/${req.params.name}`,
    )
    fs.exists(filePath, function (exists) {
      if (exists) {
        res.writeHead(200, {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': 'attachment; filename=' + req.params.name,
        })
        fs.createReadStream(filePath).pipe(res)
        return
      }
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.end('ERROR File does not exist')
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, status: 500 })
  }
})

module.exports = Applicants;
