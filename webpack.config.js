const path = require('path');
const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: "./src/webpackEntry.js",
    mode: "production",
    output: {
        path: outputDir,
        filename: 'script.min.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
   }
};