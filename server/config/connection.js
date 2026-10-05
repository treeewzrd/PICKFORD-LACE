const mongoose = require('mongoose');

if (!process.env.MONGODB_URI) {
  console.warn('MONGODB_URI is not set. Database features will not work until it is configured.');
} else {
  const uriForLogging = process.env.MONGODB_URI.replace(/:([^:@]+)@/, ':***@');
  console.log(`Connecting to MongoDB: ${uriForLogging}`);

  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connection established successfully'))
    .catch(err => console.error('MongoDB connection error:', err.message));
}

module.exports = mongoose.connection;
