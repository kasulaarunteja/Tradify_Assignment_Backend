const mongoose = require('mongoose')

const PostjobSchema = new mongoose.Schema(
  {
    role: { type: String, require: true },
    company_name: { type: String, require: true },
    location: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

module.exports = mongoose.model('Post', PostjobSchema)

///Role, company, name location ,company description
