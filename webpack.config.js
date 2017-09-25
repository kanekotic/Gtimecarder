module.exports = {
	entry: './src/index.js',
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
	output: {
		filename: './src/bundle.js'
	},
}
