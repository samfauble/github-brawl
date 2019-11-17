const path = require("path")
const webpack = require("webpack")


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
        }
    }  
