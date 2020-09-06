const webpack = require('webpack');
// 生成html模版
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                "@babel/plugin-transform-react-jsx",
                                {pragma: "ToyReact.createElement"}
                            ]
                        ]
                    }
                }
            }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    devServer: {
		host: '127.0.0.1',
		port: 4000,
		inline: true,
		disableHostCheck: true,
		historyApiFallback: true,
		contentBase: '/dist/',
	},
    plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}