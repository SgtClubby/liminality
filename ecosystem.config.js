module.exports = {
  apps : [{
    name   : "Clomby site",
    script : "npm run start",
    out_file: '/var/log/pm2/clomby-site/log.log',
    error_file: '/var/log/pm2/clomby-site/error.log',
    env: {
      "NODE_ENV": "production",
    }
  }]
}
