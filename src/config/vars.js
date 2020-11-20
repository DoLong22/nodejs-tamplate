const path = require('path');

require('dotenv-safe').config({
  allowEmptyValues: true,
  example: './.env.example',
});
module.exports = {
    port: process.env.PORT,
}