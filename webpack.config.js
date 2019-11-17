const path = require("path")
const webpack = require("webpack")


module.exports = {
    entry: "./app/src/client/index.js",
    rules: [
        {
            test:/\(.js|.jsx)/,
            loader: babel-loader
        },
        {
            test:/\.scss/,
            use:[style-loader, css-loader, sass-loader]
        }
    ],
    plugins: []
}