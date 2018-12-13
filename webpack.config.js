const path = require('path');   // path package, stored in path const var.

module.exports = {
    entry: ['@babel/polyfill', './resources/js/API/index.js'], // Entry point
    output: {
        path: path.resolve(__dirname, './resources/dist-js'),   // Outputs bundle to this directory
        filename: 'bundle.js'   // with this filename
    },
    devServer: {
        contentBase: './'   // live server direction
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // checks for all possible files that has .js in their name
                exclude: /node_modules/,    // excluding node_modules folder
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
