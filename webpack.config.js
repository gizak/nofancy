var path = require("path");

module.exports = {
    entry: {
        list: './src/list.js',
        single: './src/single.js'
    },
    output: {
        path: path.join(__dirname,'static','js'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    }
};