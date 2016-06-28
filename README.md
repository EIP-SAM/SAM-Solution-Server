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
### Installation (from source)
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
Configuration file: `config/base.config.json`
* In the config file, update the server `port` if needed
* In your SQL database, create a new database
* In your SQL database, create a new user if needed
* In the config file, update the `database` field with the name of the wanted database
* In the config file, update the database `username` and its `password`
* In the config file, update the sql server `host` address if needed
* In the config file, update the SQL `dialect` used
  * For a mariadb database, fill with `mysql`
  * For a MySQL database, fill with `mysql`
  * For a sqlite database, fill with `sqlite`
  * For a PostgreSQL database, fill with `postgres`
  * For a MSSQL database, fill with `mssql`
* Install your database driver
  * For a mariadb database, `npm install --save mysql`
  * For a MySQL database, `npm install --save mysql`
  * For a sqlite database, `npm install --save sqlite3`
  * For a PostgreSQL database, `npm install --save pg pg-hstore`
  * For a MSSQL database, `npm install --save tedious`
* Update the `secret` value with a secret key >= 8 characters
* Update the `salt` value with a different secret key >= 8 characters

##### Configure MongoDB
Configuration file: `config/mongoose.config.json`
* In the config file, update the server `port` if needed
* In your MongoDB database, create a new database
* In your MongoDB database, create a new user if needed
* In the config file, update the `database` field with the name of the wanted database
* In the config file, update the database `username` and its `password`
* In the config file, update the server `host` address if needed

##### Configure git server
Configuration file: `config/git.config.json`
* Update the git server `baseDir` (base directory) if needed
* Check the directory permissions to be sure that the server will be able to read/write in this folder

##### Configure mail server
Configuration file: `config/mail.config.json`
* Update the mail server `host` address
* Update the mail server `port` if needed
* Update the `secure` field to `false` if your mail server is not able to use SSL/TLS (not recommended)
* Update the mail user authenfication fields `user` and `pass`

*"I don't have a mail server! What should I do?"*  
You should be able to setup and use a gmail account as a mail server. You can find the setup and use instructions here http://nodemailer.com/using-gmail/ .

### Run
#### Launch the server
```
$ npm start
```

#### Access the web interface
Check that the web interface is successfully running. For that go with your favorite web browser at the address the server is listening on. For example `http://localhost:8080`, depending of the configuration you previously set.

#### Install the client service
Please refer to the README instructions inside [SAM-Solution-Daemon-Client](https://github.com/EIP-SAM/SAM-Solution-Daemon-Client) repository.

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
