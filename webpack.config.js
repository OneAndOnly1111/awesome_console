var path = require('path');
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports = {
    entry: {
        app:"./src/app.js",
        vendor:["jquery","react","moment","echarts"]
    },
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: "[name].js",
        publicPath: '/'
    },
    module: {
        loaders: [
            // css
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // less
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.png|\.jpg$/,
                loader: 'url-loader'
            },
             {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.61:10004/'
            },
            "/dtapi":{
                target:'http://121.196.222.143/'
            }
            // "/dtapi":{
            //     target:'http://localhost:8989/'
            // }
        }
    },
    plugins:[
        new CleanWebpackPlugin(['build']),//bundle[1]
        new HtmlWebpackPlugin({
            title:'云熵运维控制台',
            template:path.resolve(__dirname,'views/index.html'),
            filename:'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        })
    ]

}
