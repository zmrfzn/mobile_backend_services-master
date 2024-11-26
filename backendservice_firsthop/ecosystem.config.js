module.exports = {
    apps : [{
      name: 'mobile_first_hop',
      script: 'server.js',
      env_dev: {
        NODE_ENV: "development",
        NEWRELIC_APP_NAME: "mobile_first_hop_ec2"
     }
    }]
  };
  