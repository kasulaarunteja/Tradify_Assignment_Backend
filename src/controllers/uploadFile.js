const path = require("path");
const multer = require("multer");

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "./uploads/"), function (error) {
			if (error) {
				console.log(error, "at line number 8 ");
			}
		});
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + " - " + file.originalname, function (error) {
			if (error) {
				console.log(error, "at line number 8 ");
			}
		});
	},
});

let upload = multer({
	storage,
	fileFilter: function (req, file, callback) {
		var ext = path.extname(file.originalname);
		if (ext !== ".pdf") {
			return callback(new Error("Only pdfs are allowed"));
		}
		callback(null, true);
	},
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
});

module.exports = { upload };