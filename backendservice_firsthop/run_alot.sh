#!/bin/bash

while true
  do
    url="http://localhost:3001/webrequest"
    echo url
    wget -O - $url > /dev/null
    sleep 2


 done
