module.exports = {
  port: 3000,
  session: {
    secret: 'boyce',
    key: 'boyce',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/blog'
};
