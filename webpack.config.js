const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	watchOptions: {
        ignored: /node_modules/,
        poll: 1000
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
			},
			{
				test: /\.html/,
				use: {
					loader: "html-loader",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
	],
};
