const { default: mongoose } = require("mongoose");
const ApllicantSchema = new mongoose.Schema(
	{
		JobID: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: "Post",
		},
		FullName: { type: String, required: true },
		Email: { type: String, required: true },
		Experience: { type: String, required: true },
		Expected_CTC: { type: String, required: true },
		resume: { type: String, required: true },
	},
	{ versionKey: false, timestamps: true }
);
const applicant = mongoose.model("applicant", ApllicantSchema);

module.exports = { applicant };