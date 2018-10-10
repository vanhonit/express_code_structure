const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const config = module.exports;
const PRODUCTION = process.env.NODE_ENV === 'production';
const rootDir = fs.realpathSync(process.cwd());
config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '127.0.0.1'
};
let extendEnvPath = '';
if (PRODUCTION) {
  // for example
  config.express.ip = '0.0.0.0';
  if (fs.existsSync(path.resolve(rootDir, '.env.production'))) {
    extendEnvPath = path.resolve(rootDir, '.env.production');
  }
} else {
  extendEnvPath = path.resolve(rootDir, '.env.local');
}
if (extendEnvPath) {
  dotenvExpand(dotenv.config());
  dotenvExpand(dotenv.config({ path: extendEnvPath }));
}
// config.db same deal
// config.email etc
// config.log
