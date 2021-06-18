module.exports = {
  apps: [
    {
      name: 'TravelWebsite',
      port: 3333,
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
