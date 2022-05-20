<h1 align="center">
Pharma Visualizer
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

[See live site](https://pharma-visualizer.herokuapp.com/)

> Pharma Visualizer is a fullstack implementation in MongoDB, Expressjs, React, Nodejs.

This application allows users to sign up/ login and enter data about patient scores in two drug trials.
Data is processed and presented back to the user in the form of a chart. 

## clone or download
```terminal
git clone https://github.com/Conorbeamish/data-processor.git
```

The srver is installed from the root directory, the client is installed from /client 
Both can be run concurrently from root directory, see below

## project structure
```terminal
LICENSE
package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage

## Prerequisites
- [MongoDB](https://www.mongodb.com/)
- [Node](https://nodejs.org/en/download/) 
- [npm](https://nodejs.org/en/download/package-manager/)


## Client-side usage(PORT: 3000)
```terminal
cd client   // go to client folder
npm i       // npm install packages

// deployment for client app
npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
npm run start // this will run the files in docs
```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a SECRET_KEY in .env at root level to connect to MongoDB)
(You will need a MONGO_DB_URI in .env to connect to a MongoDB cluster when deploying)

### Start

```terminal
npm i       // npm install packages
npm run dev // run it locally and start both the server and the client     
```

# Whats next

* Improve Error Handling on client & server 
* Restrict user signup and password length for security
* Make responsive for mobile
* Include more analytical charts
* Fix Floating Point Issue and negative data values
* Create multiple datasets for users 
* Polish off styling
* Refactor client, extract API call function 
