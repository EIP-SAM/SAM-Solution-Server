# SAM-Solution-Server - Docker
System Administration Manager - Docker

## Requirement
* Docker-engine V1.12 +

## Docker **Server**
* Build : `docker build -t samsolution/server .`
* Run : `docker run -d --net=host -p 8080:8080 -v repo/config/:/usr/src/app/config/  samsolution/server`
* Configuration has to be edited in the usual `config/` directory

## Docker **Webapp**
* Dockerfile location : `webapp/`
* Build : `docker build -t samsolution/webapp .`
* Run : `docker run -d --net=host -p 3000:3000 samsolution/webapp`

## Docker Run command's parameters
* `-d` : Run the container in background.
* `--net=host` : Link the container network to the host network (to access host's database servers for example)
* `-p 8080:8080` : Link port 8080 of host to port 8080 of container (API server).
* `-p 3000:3000` : Link port 3000 of host to port 3000 of container (WEBAPP server).
* `-v repo/config/:/usr/src/app/config/` : Mount data from  repo/config/ (from host) into /usr/src/app/config (in the container). The S.A.M. Solution server config should be in this directory
* `samsolution/server` & `samsolution/webapp` : Name of the base image.
