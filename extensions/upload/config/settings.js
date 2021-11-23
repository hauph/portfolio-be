module.exports = {
  provider: "do",
  providerOptions: {
    key: process.env.DO_SPACE_ACCESS_KEY,
    secret: process.env.DO_SPACE_SECRET_KEY,
    endpoint: 'sgp1.digitaloceanspaces.com',
    space: process.env.DO_SPACE_BUCKET,
  },
};
