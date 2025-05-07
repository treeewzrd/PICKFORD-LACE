// This is a special server file for Render deployment
// It avoids using bcrypt by using bcryptjs instead

console.log('Starting Render-specific server with bcryptjs patch');

// First, install bcryptjs if it's not already installed
try {
  require('bcryptjs');
  console.log('bcryptjs is already installed');
} catch (e) {
  console.log('bcryptjs not found, installing...');
  require('child_process').execSync('npm install bcryptjs', { stdio: 'inherit' });
  console.log('bcryptjs installed successfully');
}

// Monkey-patch the require function to replace bcrypt with bcryptjs
const Module = require('module');
const originalRequire = Module.prototype.require;

Module.prototype.require = function(path) {
  if (path === 'bcrypt') {
    console.log('Redirecting bcrypt require to bcryptjs');
    return originalRequire.call(this, 'bcryptjs');
  }
  return originalRequire.call(this, path);
};

console.log('Require function patched to redirect bcrypt to bcryptjs');

// Now load your actual server
console.log('Loading the actual server...');
require('./server/server.js');
