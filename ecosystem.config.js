module.exports = {
  apps: [
    {
      name: 'pocketBook-H5',
      script: 'pocketBook-H5-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '1.116.55.82',
      ref: 'origin/master',
      repo: 'git@github.com:CAN1177/pocketBook-H5.git',
      path: '/workspace/pocketBook-H5',
      'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}