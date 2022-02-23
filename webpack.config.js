const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[hash].main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};