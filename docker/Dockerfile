FROM debian:8.5
MAINTAINER S.A.M. Solution

RUN apt-get -y update
RUN apt-get -y install build-essential
RUN apt-get -y install libgcrypt11-dev

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs npm

RUN apt-get install -y emacs24-nox
RUN apt-get install -y curl wget

RUN npm install -g nodemon
RUN npm install -g n
RUN n 6.5
RUN rm /usr/bin/nodejs
RUN ln -s /usr/local/bin/node /usr/bin/nodejs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY .bashrc /root/

EXPOSE 8080
EXPOSE 3000

VOLUME /usr/src/app
