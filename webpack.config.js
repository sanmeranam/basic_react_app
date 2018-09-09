var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/src/index.html",
    filename: "index.html",
    inject: "body",

});

module.exports = {
    entry: __dirname + "/src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff2?|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/build"
    },
    plugins: [HTMLWebpackPluginConfig],
    mode: "development"
};