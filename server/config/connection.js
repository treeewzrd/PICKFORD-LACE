const mongoose = require('mongoose');

// Log the MongoDB URI being used (without sensitive credentials)
const uriForLogging = process.env.MONGODB_URI 
  ? process.env.MONGODB_URI.replace(/:([^:@]+)@/, ':***@') 
  : 'mongodb://localhost:27017/ecommerce';
console.log(`Connecting to MongoDB: ${uriForLogging}`);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce')
  .then(() => console.log('MongoDB connection established successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
