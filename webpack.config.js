var path = require('path');

module.exports = {
    entry: {
        bundle: './src/app.js',
        mock: './src/mock.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: path.join(__dirname, 'src')
        }]
    }
};