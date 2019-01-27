# Initial Cherish Uganda core project

This is an Express app designed to serve as the initial environment to support the work of Cherish Uganda. As the project grows, it will get a name and is likely to change significanly.

## Installation

To get started, run the following command from this directory

`npm install`

## Running the App

To launch the application in development mode (with hot-reload enabled), use the following command:

`npm run dev`

Alternatively, run the following to enable without hot-reload:

`npm start`

By default, this will launch the app at localhost:3000. To specify a different port, set the `PORT` environmental variable.

## Environmental Variables

In development, Cherish Children uses `dotenv` to define enviornmental variables via a
`.env` file that is not checked into the source code repository. Supported environmental
variables include:

* `DATABASE_URL` The URL of the database to connect to
* `GOOGLE_CLIENT_ID` The client ID for Google OAuth
* `GOOGLE_CLIENT_SECRET` The client secret for Google OAuth
* `GOOGLE_CALLBACK_URL` The callback URL for Google OAuth
* `NODE_ENV` The node environment in which this should be run
* `PORT` The port to run the application on

## Heroku Integration

See the Heroku documentation for [Deploying Node](https://devcenter.heroku.com/articles/deploying-nodejs), [Node Best Practices](https://devcenter.heroku.com/articles/node-best-practices) and [Node Support](https://devcenter.heroku.com/articles/nodejs-support)

Note: Missing dependencies in your package.json file will cause problems when you try to deploy to Heroku. To troubleshoot this issue, on your local command line, type rm -rf node_modules; npm install --production and then to try to run your app locally by typing heroku local web. If a dependency is missing from your package.json file, you should see an error that says which module cannot be found.

TODO: 
* [Cluster Your App](https://devcenter.heroku.com/articles/node-best-practices#cluster-your-app)
* [Hook Things Up](https://devcenter.heroku.com/articles/node-best-practices#hook-things-up) Refer to this if we need to add build-scripts for assets at some point.