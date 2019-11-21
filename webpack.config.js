const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")


module.exports = {
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle_index.js",
        publicPath: "/"
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
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
                template: "./src/client/index.html",
                filename: "./index.html"
            }),
            new CopyPlugin([
                {from: "_redirects"}
            ])
        ],
        devServer: {
            historyApiFallback: true
        }
    }  
