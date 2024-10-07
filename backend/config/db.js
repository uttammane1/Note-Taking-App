const mongoose = require("mongoose");

const url = process.env.MONOGDB_URL
const connection = mongoose.connect(url);

module.exports = connection;