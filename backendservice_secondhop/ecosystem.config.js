module.exports = {
  apps : [{
    name: 'mobile_second_hop',
    script: 'server.js',
    out_file:"logs/app.log",
    error_file:"logs/error.log",
    log_date_format:"YYYY-MM-DD HH:mm Z",
    env_dev: {
      NODE_ENV: "development",
      NEWRELIC_APP_NAME: "mobile_second_hop_ec2"
   }
  }]
};
