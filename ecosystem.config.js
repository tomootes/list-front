module.exports = {
  apps: [
    {
      name: "ootes-band-frontend",
      instances: "1", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
  ],
};
