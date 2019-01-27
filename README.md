# Initial Cherish Uganda core project

This is an Express app designed to serve as the initial environment to support the work of Cherish Uganda. As the project grows, it will get a name and is likely to change significanly.

## Installation

To start, clone the application from GitHub.

```Bash
$ git clone https://github.com/hack-in-sv/cherish-uganda.git
Cloning into 'cherish-uganda'...
remote: Enumerating objects: 148, done.
remote: Counting objects: 100% (148/148), done.
remote: Compressing objects: 100% (83/83), done.
remote: Total 148 (delta 43), reused 139 (delta 37), pack-reused 0
Receiving objects: 100% (148/148), 67.74 KiB | 745.00 KiB/s, done.
Resolving deltas: 100% (43/43), done.
$ cd cherish-uganda
```

### Database Setup

Prior to running the application, you will need to install PostgreSQL and create a database. By convention, all documentation will assume the existence of a database named `cherish-uganda`, but you are free to choose any database you like.

Instructions below are for Mac users. For Windows users, see the [PostgeSQL Installer](https://www.postgresql.org/download/windows/) and the [getting started](https://www.postgresql.org/docs/10/tutorial-start.html) documentation.

On a Mac, you can use [Homebrew](https://brew.sh/). This may take some time.

```Bash
$ brew install postgres
Updating Homebrew...
```

Once installed, you will need to create a db user and database.

```Bash
$ createuser -W cherish-dbuser
Password:
$ createdb -O cherish-dbuser cherish-uganda
```

Once created, you can set the `DATABASE_URL` environmental variable as follows (see Environmental Variables below):

```Bash
DATABASE_URL=postgres://cherish-dbuser:samplepassword@localhost:5432/cherish-uganda
```

The application will syncronize the database with the current data models as need on application startup.

### Environmental Variables

In development, Cherish Children uses `dotenv` to define enviornmental variables via a `.env` file that is not checked into the source code repository. Supported environmental variables include:

* `DATABASE_URL` The URL of the database to connect to
* `GOOGLE_CLIENT_ID` The client ID for Google OAuth
* `GOOGLE_CLIENT_SECRET` The client secret for Google OAuth
* `GOOGLE_CALLBACK_URL` The callback URL for Google OAuth
* `NODE_ENV` The node environment in which this should be run
* `PORT` The port to run the application on

Please contact an administrator for any ID's or secret keys that you may need.

### Dependencies

Finally, install the node dependencies.

```Bash
$ npm install
audited 5125 packages in 2.682s
found 0 vulnerabilities
```

Any time the `package.json` file changes, you will need to re-run `npm install` to ensure that you have the updated dependencies. This will take a while to run the first time, but will be much quicker for subsequent updates.

## Running the App

To launch the application in development mode (with hot-reload enabled), use the following command:

`npm run dev`

Alternatively, run the following to enable without hot-reload:

`npm start`

By default, this will launch the app at localhost:3000. To specify a different port, set the `PORT` environmental variable.

## Heroku Integration

This application is currently deployed on Heroku for development and pilot testing. Management of the Heroku application is restricted to project leads. If you think you need access, please contact Neal Audenaert at neal@idch.org.

* [Staging Application](https://cherish-uganda-staging.herokuapp.com/) This application tracks the master branch.

See the Heroku documentation for [Deploying Node](https://devcenter.heroku.com/articles/deploying-nodejs), [Node Best Practices](https://devcenter.heroku.com/articles/node-best-practices) and [Node Support](https://devcenter.heroku.com/articles/nodejs-support)

TODO:

* [Cluster Your App](https://devcenter.heroku.com/articles/node-best-practices#cluster-your-app)
* [Hook Things Up](https://devcenter.heroku.com/articles/node-best-practices#hook-things-up) Refer to this if we need to add build-scripts for assets at some point.

## Troubleshooting

 Missing dependencies in your package.json file will cause problems when you try to deploy to Heroku. To troubleshoot this issue, on your local command line, type rm -rf node_modules; npm install --production and then to try to run your app locally by typing heroku local web. If a dependency is missing from your package.json file, you should see an error that says which module cannot be found.

## TODO Outstanding Application Setup Tasks

* Setup CI
* Setup Github branch protections
* Set up linter and unit testing, add coverage reports, etc.
* Set up review apps
* Setup Content Security Policy
* Setup Google Analytics and TagManager
* Create privacy statement and cookie policy (figure out GDPR?)