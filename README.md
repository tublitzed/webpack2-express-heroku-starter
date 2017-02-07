# Webpack2/Express/Heroku Starter

This is a very basic sample app to get you started using [Webpack 2](https://webpack.js.org/), [Express](http://expressjs.com/) and is setup to deploy to [Heroku](https://www.heroku.com/).

- It **does not** use React, Angular, or any other front-end framework. Pick your own when you're ready.
- It **does** use [HMR](https://webpack.js.org/concepts/hot-module-replacement/). Cause this is magical.

## Setup

- `npm i`
- `npm start`

## Deploy

First, you'll need a heroku account.

- In Heroku, create a new app.
- Add a new builpack, select `heroku/nodejs`. This should set you up to automatically run `npm install` which is what you'll need to get up and running.
- Follow the instructions to [link to your repository](https://devcenter.heroku.com/articles/git).
- `git push heroku master` - Assuming you've set everything up correctly, this will deploy your app, and run the postinstall script in `package.json`.

## Credits

Thanks to [christianalfoni](https://github.com/christianalfoni) for the excellent [Webpack 1 tutorial and example repo](https://github.com/christianalfoni/webpack-express-boilerplate). I got started there and then built this one once I realized I wanted to play with Webpack v2.

## Notes

The `Heroku` part of this is really easy to change for your own build process. Dig into the npm scripts, and take a look at the production webpack config.
