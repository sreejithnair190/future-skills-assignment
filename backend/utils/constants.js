const dotenv = require("dotenv");

dotenv.config();

exports.NODE_ENV = process.env.NODE_ENV;
exports.PORT = process.env.PORT || 8080;
exports.API_URL = process.env.API_URL || "";
exports.MONGODB_URI = process.env.MONGODB_URI || "";