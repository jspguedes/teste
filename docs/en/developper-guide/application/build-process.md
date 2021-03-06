# Build process

This operation consist of transforming and combining all the application resources to make them usable in web browsers. This process is taken care of by [Webpack](https://webpack.github.io/), and can be launched with `npm run dev` during development, and `npm run build` for production.

[include:110-128](../../../../package.json)

Mainly, it will take all the `JavaScript` files and combine them in a giant bundle file. Thanks to the `babel` plugin for Webpack, we can make use in our code of some `JavaScript` [features](/javascript/syntax.md#ES2015) which are not widely supported: `babel` will transform the code you write to make it work in all major browsers.

Webpack will also process the main `css` file to make it load faster and work consistently across browsers.

[include:7-7](../../../../src/layout/app/components/app.jsx)

Webpack is configured via the [webpack.config.js](https://github.com/InseeFr/Pogues/blob/master/webpack.config.js) file. Refer to this file to see all the operations this configuration handle.
Webpack will transform the `JavaScript` code you write, but in order to make debugging easier, it will provide `source maps` to enable browsers to show the original files within the developer tools.

During development, `npm run dev` will act as a background task:

- providing a simple HTTP server to serve the application assets on port `3000`;
- watching for file modifications and recompiling the application accordingly;
- automatically reloading the page in the browser to take the modifications into account.
  The `npm run dev` script is configured to work with a "in memory" version of the bundle file (`--content-base` command line option for `webpack-dev-server`), hence the `JavaScript` file served to the browsers might not be visible in the `dist` folder on your hard drive.

The Webpack configuration for production is slightly different from the one used for development: it does not need the configuration related to the development web server. It should also provide [other adjustments](https://github.com/InseeFr/Pogues/issues/145) to make the code more production ready. When building code for production, Webpack will automatically minify the `JavaScript` thanks to the command line option `-p`.

You will find some stats about WebPack in the [stats](../../stats.html) page (Attention: you need to open the page in a new tab, in order to make the redirection working)

## Other NPM Script

The project also provide other NPM scripts, in order to manage its lifecycle.

- test:watch : Execute unit tests with watch mode
- dev : Launch the application with the remote API
- dev:local : Launch the application with the locale API
- dev:server : Launch scripts `npm run dev:local` and `npm run server`
- server : Launch the fake NodeJS server
- build : Generate the production version of the application with the configuratio for the prod environment
- build:dev : Generate the production version of the application with the configuratio for the dev environment
- build:dv : Generate the production version of the application with the configuratio for the dv environment
- build:preprod : Generate the production version of the application with the configuratio for the preprod environment
- build:qa : Generate the production version of the application with the configuratio for the qa environment
- build:qf : Generate the production version of the application with the configuratio for the qf environment
- lint : Check the quality of the project
- lint:fix : Check the quality of the project and apply fixes automatically
- start : Launch the command `npm run dev`
- e2e : Launch Integration Tests
- e2e:travis : Launch Integration Tests with the configuration for Travis

## Add a new environment

If you want to add a new environment (for example qlf2), you just need to :

- Create a configuration file `config.qlf2.js` in the `build-config/environments` folder.
- Copy/Paste the configuration of another environment, and and do the adjustments
- Add a `build:qlf2` NPM script.
