The easiest way to get started with Webpack hot-reload, React.js and Meteor is to clone this repository.

# Steps
1. git clone https://github.com/thereactivestack/meteor-webpack-react-kickstart
2. `npm install`
3. `./scripts/run-dev.sh`

You will get:
- A configured Webpack build
- React.js configured with react-router
- Hot reload in development
- Server-side rendering in production

# Folders
- `react`: Your React.js application. It must be outside your Meteor project or the server will restart at every file change (it's slow!)
- `meteor`: Your meteor application. Mainly your server stuff and file assets
- `settings`: Your development and production settings for Meteor (you can add your own stuff)
- `webpack`: Your development and production webpack config (go ahead and change the build to work the way you like it)

# Scripts
Every scripts are written both for Linux/Mac (.sh) and for Windows (.bat)

- `run-dev`: Start Meteor with hot-reload
- `run-prod`: Start Meteor with server-rendering (like in production)
- `build`: Build your meteor project including the Webpack bundle
