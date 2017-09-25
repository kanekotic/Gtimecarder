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
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'src/html/**/*',to:'dist', flatten: true},
            {from:'src/resources/**/*',to:'dist', flatten: true}
        ])
    ],
    output: {
        filename: './dist/bundle.js'
    }
}
