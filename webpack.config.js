const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=application/font-woff'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'src/html/**/*',to:'dist', flatten: true},
            {from:'src/resources/**/*',to:'dist', flatten: true, ignore: ['hot-reload.js'] }
        ])
    ],
    output: {
        filename: './dist/bundle.js'
    }
}
