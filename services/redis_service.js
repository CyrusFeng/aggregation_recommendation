const RedisIO = require('ioredis');

const client = new RedisIO({
  host:'127.0.0.1',
  port:6379
});

module.exports = client