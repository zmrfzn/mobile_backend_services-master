module.exports = {
    apps : [{
      name: 'mobile_first_hop',
      script: 'server.js',
      out_file:"logs/app.log",
      error_file:"logs/error.log",
      log_date_format:"YYYY-MM-DD HH:mm Z",
      env_dev: {
        NODE_ENV: "development",
        NEWRELIC_APP_NAME: "mobile_first_hop_ec2",
        SECOND_HOP_IP: 'http://3.230.230.121/mobile2'
     }
    }]
  };
  