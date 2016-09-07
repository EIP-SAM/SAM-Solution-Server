# SAM-Solution-Server - Docker
System Administration Manager - Docker

## Installation
* Be sure to be in this directory (`pwd` == `..../docker/`)
* Remove node_modules : `rm -rf ../node_modules` + `rm -rf ../webapp/node_modules`
* Build : `docker build -t samsolution/server:v1 .`
* Check : `docker images` ==> you should see the samsolution/server:v1 image

## Run command
* `docker run --rm -it --net=host -p 8080:8080 -p 3000:3000 -v /home/user/eip/server:/usr/src/app samsolution/server:v1 bash`

## Command's config
* `docker run` : Well, pretty easy, hum ?
* `-rm` : Will delete the container on exit.
* `-it` : Make the container interactive (eg. you can use it with a shell).
* `-p 8080:8080` : Link port 8080 of host to port 8080 of container (API server).
* `-p 3000:3000` : Link port 3000 of host to port 3000 of container (WEBAPP server).
* `-v /home/user/eip/server:/usr/src/app` : Mount data from  /home/user/eip/server (from host) into /usr/src/app (in the container). The S.A.M. Solution server repo should be in this directory.
* `samsolution/server:v1` : Name of the base image.
* `bash` : Command we want to run. Should be bash for interactive shell.
