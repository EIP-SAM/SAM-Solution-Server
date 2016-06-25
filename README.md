# SAM-Solution-Server
System Administration Manager - Web server

[![Build Status](https://circleci.com/gh/EIP-SAM/SAM-Solution-Server/tree/develop.svg?style=shield)](https://circleci.com/gh/EIP-SAM/SAM-Solution-Server)

## Description
### Project
SAM-Solution is a __management tool__ for __IT-infrastructures__, intended for companies.
It allows to centralize __system and software migrations__, as well as __backup and restoration__ of __user data__.
This tool design goal is to __help the system adminstrator__ of a company in his work, and to be __easily usable by the final user__.

This project fits into the ["Epitech Innovative Project"](http://www.epitech.eu/epitech-innovative-projects.aspx) *(link in french)*. You can find our showcase website [here](http://eip.epitech.eu/2017/samsolution).

### Repository
*Repository description (in construction)*

## Pre-requisites
### Hardware requirements
* Computational or memory server hardware capacities are theoretically not involving any problem regarding the execution flow of our solution. However, the more its capacities will be limited, the more slowly the execution flow will be.
* A computer possessing a common processor architecture, like __x86__, __x86_64__, __ARM__.  
  *Note: Only __x86_64__ architecture has been tested for now.*
* Server installation requires an active internet connexion.
* Server must be reachable via a local network or an internet connexion from the clients.
* A mail server must be reachable via a local network or an internet connexion from the server.

### Software requirements
* A modern and up to date __Linux__ operating system (like Debian/Ubuntu/Fedora/Archlinux/...)  
  *Note: It is important to note that, for experimental purposes only, in accordance with the actual development status, a modern version of __Windows__ or __OS X__, can, for now, be still sufficient to make run the server.*
* A __node.js__ version `>= 5.4.X`
* A __npm__ version `>= 1.2.X`
* An __SQL__ database must be available. __PostgreSQL__, __MySQL__, __MariaDB__, __SQLite__ and __MSSQL__ are supported.
* A __MongoDB__ database must be available.
* __git__ must be available through the command line

## Usage
### Installation (development version)
#### Clone this repository
```
$ git clone https://github.com/EIP-SAM/SAM-Solution-Server.git
$ cd SAM-Solution-Server
```

#### Select the desired version
##### Latest release version
```
$ git checkout release
```

##### Latest development version
```
$ git checkout develop
```

#### Install project `npm` dependencies
```
$ npm install
```

#### Configure the server
##### Copy the default configuration files
```
$ ls config/
$ for f in config/*config.json.example; do cp "$f" "`echo $f | sed s/json.example/json/`"; done;
$ ls config/
```

##### Configure server base
*Base server configuration (in construction)*

##### Configure MongoDB
*MongoDB configuration (in construction)*

##### Configure git server
*Git server configuration (in construction)*

##### Configure mail server
*Mail server configuration (in construction)*

### Run
#### Launch the server
```
$ npm run
```

#### Access the web interface
Check that the web interface is successfully running. For that go with your favorite web browser at the address the server is listening on. For example `http://localhost:8080`, depending of the configuration you previously set.

#### Install the client service
*Client service installation (in construction)*

## Contribution
### Code
This project being a school project, we are not yet open to external code contribution.

### Issues
Suggestions and bugs reporting are always welcome! Don't hesitate to open an issue if you have something to say.

## Who do I talk to?
We are a team of nine [Epitech](https://en.wikipedia.org/wiki/Epitech) students. You can contact us via this address samsolution_2017@labeip.epitech.eu

### Authors
* Alex Michaux *(Web GUI referent)*
* Christopher Vuong
* Claire Almozinos *(Time master, Web GUI referent)*
* Etienne Leroy
* Jean-Stéphane Victor
* Jérémy Bernard *(Project leader)*
* Nicolas Chauvin *(Lead developer, Technical referent)*
* Stéphane Phongphaysanne
* Steven Gouasbault *(System administration referent)*

## License
GNU Lesser General Public License Version 3 (LGPL-3.0)  
See full license [here](https://github.com/EIP-SAM/SAM-Solution-Server/blob/develop/LICENSE)
