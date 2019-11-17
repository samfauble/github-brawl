const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: "./app/src/client/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle_index.js"
    },
    mode: "development",
        module: {
            rules: [
                {
                    test:/\.js$/,
                    exclude:/node_modules/,
                    loader: "babel-loader"
                },
                {
                    test:/\.scss$/,
                    use:["style-loader", "css-loader", "sass-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./app/src/client/index.html",
                filename: "./index.html"
            })
        ]
    }  
