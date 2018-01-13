# Webpack & Mithril & Tailwind CSS Starter Project

A boilerplate Mithril application using ES6, Babel, Webpack 3, [Tailwind CSS](https://tailwindcss.com), Webpack dev server hot reload and eslint

To get started, clone the project and install the dependencies:

```shell
cd mithril-tailwindcss-startkit
yarn install
```

Start up Webpack in dev mode:
```shell
yarn start
	# Webpack dev server will run and open the app on the browser with HRM,
```

Start up Webpack in watch mode:
```shell
yarn watch
	# Webpack watch mode refresh dist file when source change
```

Compile the app for production:
```shell
yarn build
	# Compiles the app for production and all compiled files lies on dist dir.
    # To deploy an the application simply transfer the dist to a web server's public directory.
```
## Directory Structure:
```shell
.
|-- dist                               # Compiled files
|   |-- css
|   |   |-- main.css
|   |   |-- main.css.map
|   |-- js
|   |   |-- main-bundle.js
|   |   |-- main-bundle.js.map
|   |   |-- manifest-bundle.js
|   |   |-- manifest-bundle.js.map
|   |   |-- vendor-bundle.js
|   |   |-- vendor-bundle.js.map
|   |-- index.html
|-- node_modules						# 3rd-party libraries
|-- src									# Application source files
|   |-- components
|   |   |-- layout
|   |   |   |-- layout.css
|   |   |   |-- layout.js
|   |   |-- main
|   |       |-- main.css
|   |       |-- main.js
|   |-- images
|   |   |-- favicon.png
|   |-- init
|   |   |-- index.css                  # Global style
|   |   |-- index.js                   # Main js file
|   |   |-- routes.js                  # Mitrhil route
|   |-- model
|   |   |-- app.js                     # Application state
|   |-- pack
|   |   |-- application.js             # Application entry point
|   |-- index.html
|-- Guardfile
|-- README.md
|-- package.json
|-- postcss.config.js                   # PostCss config
|-- tailwind.js                         # Tailwind config
|-- webpack.common.js
|-- webpack.dev.js                      # WebPack dev mode config
|-- webpack.prod.js                     # WebPack build config
|-- webpack.watch.js                    # WebPack watch mode config
|-- yarn.lock


```

