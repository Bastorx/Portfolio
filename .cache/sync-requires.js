const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/bastien/dev/Portfolio/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/bastien/dev/Portfolio/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/bastien/dev/Portfolio/src/pages/index.tsx")))
}

