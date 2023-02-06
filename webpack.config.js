// webpack.config.js
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {outToConsole} = require("pug-plugin/src/Utils");
const PATH_SRC=path.resolve(__dirname, 'src')
const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
    pages: path.join(__dirname, './src/pages')
}
const PAGES_DIR = `${PATHS.src}`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))
//const PAGES_DIR_T ='PATHS.src/**/*'

module.exports = {
    // ...
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    plugins: [
        // ...PAGES.map(page => new HtmlWebpackPlugin({
        //     title: 'webpack Boilerplate',
        //     template: `${PAGES_DIR}/${page}`,
        //     filename: `./${page.replace(/\.pug/, '.html')}`
        // })),
        new HtmlWebpackPlugin({
            template: './src/root.pug',
        }),
    ],

    devServer:{
        host: '192.168.110.35',
        port:8080,
        //static:{directory: path.join(__dirname, 'public')},
        client:{
            overlay:{errors:true,warnings:false},
            progress:true
        }
    },
    module: {
        rules:[
            {test: /\.html$/i, loader: "html-loader"},
            {test: /\.pug$/i, use:["pug-loader"]},
            {test: /\.s[ac]ss$/i, use:["style-loader",'css-loader','sass-loader']},
            {test: /\.(jpe?g|png|gif|svg|ico)$/i, loader: 'file-loader',
                options: {name: '/dist/img/[name].[ext]'}
            }
            ]
            }

}
