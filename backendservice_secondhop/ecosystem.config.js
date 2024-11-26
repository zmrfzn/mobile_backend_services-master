module.exports = {
  apps : [{
    name: 'mobile_second_hop',
    script: 'server.js',
    env_dev: {
      NODE_ENV: "development",
      NEWRELIC_APP_NAME: "mobile_second_hop_ec2"
   }
  }]
};
