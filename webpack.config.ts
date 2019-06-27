
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import webpack from 'webpack';
import path from 'path';
const config:any = {
    mode: process.env.NODE_ENV !== 'production'?'development':'production',
    devtool: "cheap-eval-source-map",
    entry: process.env.NODE_ENV === 'production'?[path.resolve('src/main.tsx')]:['webpack-hot-middleware/client?reload=true', path.resolve('src/main.tsx')],
    output : {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve('src/index.tpl.html'),
            inject : 'body',
            filename : 'index.html'
        }), 
        new webpack.HotModuleReplacementPlugin(),  
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new CleanWebpackPlugin() 
    ]
}

if(process.env.NODE_ENV === 'production'){
    delete config['devtool']
    config.optimization = {
        splitChunks: {
            chunks: 'initial',
            minSize: 20000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
              default: {
                minChunks: 2,
                priority: -20,
              },
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
              },
            }
        }
    }
}

module.exports = config