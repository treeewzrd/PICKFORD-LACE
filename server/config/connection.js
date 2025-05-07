const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/your-local-db-name');

module.exports = mongoose.connection;
