# Initial Cherish Uganda core project

This is an Express app designed to serve as the initial environment to support the work of Cherish Uganda. As the project grows, it will get a name and is likely to change significanly.

## Installation

To get started, run the following command from this directory

`cd . && npm install`

## Running the App

To launch the application in development mode, use the following command:

`DEBUG=cherish-uganda-core:* npm run dev`

This will launch with auto-reloading support.


`DEBUG=cherish-uganda-core:* npm start`

This will launch the app at localhost:3000

## Environmental Variables

In development, Cherish Children uses `dotenv` to define enviornmental variables via a
`.env` file that is not checked into the source code repository. Supported environmental 
variables include:

* `GOOGLE_CLIENT_ID` The client ID for Google OAuth
* `GOOGLE_CLIENT_SECRET` The client secret for Google OAuth
* `GOOGLE_CALLBACK_URL` The callback URL for Google OAuth
