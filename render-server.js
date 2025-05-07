// Enhanced render-server.js with Stripe key handling
console.log('Starting Render-specific server with fixes');

// Install bcryptjs if needed
try {
  require('bcryptjs');
  console.log('bcryptjs is already installed');
} catch (e) {
  console.log('Installing bcryptjs...');
  require('child_process').execSync('npm install bcryptjs', { stdio: 'inherit' });
}

// Patch require to use bcryptjs instead of bcrypt
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function(path) {
  if (path === 'bcrypt') {
    console.log('Redirecting bcrypt to bcryptjs');
    return originalRequire.call(this, 'bcryptjs');
  }
  return originalRequire.call(this, path);
};

// Set default environment variables if not present
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('⚠️ STRIPE_SECRET_KEY not set! Using placeholder for testing');
  // This is a fake key format that won't work but will prevent the app from crashing
  process.env.STRIPE_SECRET_KEY = 'sk_test_placeholder';
}

if (!process.env.STRIPE_PUBLISHABLE_KEY) {
  console.warn('⚠️ STRIPE_PUBLISHABLE_KEY not set! Using placeholder for testing');
  process.env.STRIPE_PUBLISHABLE_KEY = 'pk_test_placeholder';
}

// Add other important environment variables
if (!process.env.MONGODB_URI) {
  console.warn('⚠️ MONGODB_URI not set! Using default value');
  process.env.MONGODB_URI = 'mongodb://localhost:27017/ecommerce';
}

if (!process.env.JWT_SECRET) {
  console.warn('⚠️ JWT_SECRET not set! Using default value');
  process.env.JWT_SECRET = 'dev-jwt-secret';
}

// Ensure we use the correct PORT
process.env.PORT = process.env.PORT || '3001';
console.log(`Using PORT: ${process.env.PORT}`);

// Add global error handler
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  // Keep the process running despite the error
});

// Now load the actual server
console.log('Loading the actual server...');
try {
  require('./server/server.js');
  console.log('Server loaded successfully');
} catch (error) {
  console.error('Error loading server:', error);
}
