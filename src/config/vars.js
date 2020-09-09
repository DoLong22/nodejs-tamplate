const path = require('path');

require('dotenv-safe').config({
  allowEmptyValues: true,
  example: './.env.example',
});
module.exports = {
    port: process.env.PORT,
    access_key_id: process.env.ACCESS_KEY_ID,
    secret_key_id: process.env.SECRET_ACCESS_KEY,
    s3_bucket: process.env.S3_BUCKET,
    s3_region: process.env.S3_REGION
}