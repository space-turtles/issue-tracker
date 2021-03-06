# issue-tracker
Skeleton app.

### Setup instructions - frontend
* Ensure you have `npm`.
* Ensure you have `bower`.
* `npm install`
* `bower install`
* Ensure you have [`brunch`](http://brunch.io) (`npm install -g brunch`)
* `brunch watch --server` will run the dev server on port `3333`.

### Frontend basic overview

Frontend is ES5-style AngularJS. It generally follows [Todd Motto's ES5 1.4 style guide](https://github.com/toddmotto/angular-styleguide/tree/angular-old-es5).  
Frontend is stored in the `frontend` folder.  
The source code is in the `app` folder.  
The entry HTML file is `assets/index.html`  
Each module has its own folder. There is a `sample` folder with some example files you can use to get started.  
App entry point is `app.js`.

### Setup instructions - backend
* `npm install` to install dependencies.
* `npm start` or `node server.js` to run the server - it will listen on port 8080.
* `curl localhost:8080/api` to test that it works.

### Backend basic overview

It's a basic express app

Dependencies:
* bodyparser so we can access request bodies with `req.body`
* express-validator will provide basic input validation once we set up actual routes


# Suggested development workflow:
* In the `frontend` directory, `brunch watch` without the `--server`
* In the `backend` directory, `npm start`
* Go to `localhost:8080` to see your changes.
