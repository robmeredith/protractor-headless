# protractor-headless
docker image for running protractor test with headless chrome

# usage

docker run --privileged -it test8 bash

# git clone contains conf.js
#git clone mytests
  
xvfb-run --server-args="-screen 0 1024x768x24" -a protractor conf.js
