
const _webpack = require( 'webpack');
const _path = require('path');
const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const _config= require('./webpack.config.js')

const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT
const compression = require('compression');

const app = express()

if (isDeveloping) {
    const compiler = _webpack(_config)
    const middleware =  webpackMiddleware(compiler,{
        publicPath: _config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    })
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
    app.get('*', (req : any, res : any) => {
        res.write(middleware.fileSystem.readFileSync(_path.join(__dirname, 'dist/index.html')))
        res.end()
    })


}else{
    app.use(compression());
    app.use(express.static(__dirname + '/'))
    app.get('*', (req : any, res : any) => {
        res.sendFile(_path.join(__dirname, '/index.html'))
    })
}

app.listen(port, '0.0.0.0', function onStart(err : any) {
    if(err){
        console.log(err)
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
})