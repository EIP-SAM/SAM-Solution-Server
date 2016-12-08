# SAM-Solution-Server install and run instructions

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
* A __node.js__ version `>= 6.0.X`
* A __npm__ version `>= 1.2.X`
* An __SQL__ database must be available. __PostgreSQL__, __MySQL__, __MariaDB__, __SQLite__ and __MSSQL__ are supported.
* A __MongoDB__ database must be available.
* __git__ must be available through the command line

*Note: If you're encountering problems installing nodejs `>= 6.0.X`, visit the official [nodejs installation instructions](https://nodejs.org/en/download/package-manager/)*

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
$ npm install --prod
```

#### Configure the server
##### Copy the default configuration files
```
$ for f in config/*config.json.example; do cp "$f" "`echo $f | sed s/json.example/json/`"; done;
```

##### Configure server base
Configuration file: `config/base.config.json`
* In the config file, update the server `port` (if needed)
* In your SQL database, create:
  * A new database
  * A new user
* In the config file, update:
  * The `database` field with the name of the wanted database
  * The database `username` and its `password`
  * The SQL server `host` address (if needed)
  * The SQL `dialect` used (using the following sheet)

| __Database__ | mariadb | MySQL   | sqlite   | PostgreSQL | MSSQL   |
|--------------|---------|---------|----------|------------|---------|
| __dialect__  | `mysql` | `mysql` | `sqlite` | `postgres` | `mssql` |

* In the config file, install:
  * Your database driver (using the following sheet)

| __Database__ | __Installation command__          |
|--------------|-----------------------------------|
| mariadb      | `npm install --save mysql`        |
| MySQL        | `npm install --save mysql`        |
| sqlite       | `npm install --save sqlite3`      |
| PostgreSQL   | `npm install --save pg pg-hstore` |
| MSSQL        | `npm install --save tedious`      |

* In the config file, update:
  * The `secret` value with a secret key >= 8 characters
  * The `salt` value with a different secret key >= 8 characters

##### Configure MongoDB
Configuration file: `config/mongoose.config.json`
* In the config file, update the server `port` (if needed)
* In your MongoDB database, create:
  * A new database
  * A new user
* In the config file, update:
  * The `database` field with the name of the wanted database
  * The database `username` and its `password`
  * The server `host` address (if needed)

##### Configure git server
Configuration file: `config/git.config.json`
* Update the git server `baseDir` base directory (recommended)
* Check the directory permissions to be sure that the server will be able to read/write in this folder

##### Configure mail server
Configuration file: `config/mail.config.json`
* Update:
  * The mail server `host` address
  * The mail server `port` if needed
  * The `secure` field to `false` if your mail server is not able to use SSL/TLS (not recommended)
  * The mail user authenfication fields `user` and `pass`

*"I don't have a mail server! What should I do?"* You should be able to setup and use a gmail account as a mail server. You can find the setup and use instructions here http://nodemailer.com/using-gmail/

### Run
#### Launch API server
```
$ npm start
```
#### Configure url server in webapp
Configuration file `webapp/app/manifest.json`
* Update url server `url_server_api` to match server address & port (default: http://localhost:8080/)

#### Launch web application server
```
$ cd webapp && npm start
```

#### Access the web interface
Check that the web interface is successfully running. For that go with your favorite web browser at the address the server is listening on. For example `http://localhost:3000/login`, depending of the configuration you previously set.

#### Install the client service
Please refer to the README instructions inside [SAM-Solution-Daemon-Client](https://github.com/EIP-SAM/SAM-Solution-Daemon-Client) repository.
