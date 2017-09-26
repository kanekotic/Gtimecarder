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
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ]
            },
            { 
              test: /\.png$/, 
              loader: "url-loader",
              options: {
                limit: 100000,
                name: "dist/[name].[ext]"
              }
            },
            { 
              test: /\.jpg$/, 
              loader: "file-loader",
              options: {
                name: "dist/[name].[ext]"
              } 
            },
            {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
              loader: "url-loader",
              options: {
                limit: 100000,
                mimetype: "application/font-woff",
                name: "dist/[name].[ext]"
              }
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
              loader: "url-loader",
              options: {
                limit: 100000,
                mimetype: "application/octet-stream",
                name: "dist/[name].[ext]"
              }
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'file-loader',
              options: {
                name: 'dist/[name].[ext]'
              }
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
              loader: "url-loader",
              options: {
                limit: 100000,
                mimetype: "application/svg+xml",
                name: "dist/[name].[ext]"
              }
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
