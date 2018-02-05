'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')


// 模拟api
const express = require('express')
//请求server
const app = express()
//加载本地数据文件
var appData = require('../db.json')
//获取对应的本地数据
var getNewsList = appData.getNewsList
var login = appData.login
var getPrice = appData.getPrice
var createOrder = appData.createOrder
var getOrderList = appData.getOrderList
//通过路由请求数据
var apiRoutes = express.Router()
app.use('/api', apiRoutes)


const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },

    // 模拟后台接口数据
    before(app) {
      //接口返回json数据，配置的数据getNewsList就赋值给getNewsList请求后调用
      app.get('/api/getNewsList', (req, res) => {
        res.json({
          errno: 0,
          getNewsList: getNewsList
        })
      }),
      app.get('/api/login', (req, res) => {
        res.json({
          errno: 0,
          login: login
        })
      }),
      app.get('/api/getPrice', (req, res) => {
        res.json({
          errno: 0,
          getPrice: getPrice
        })
      }),
      app.post('/api/getPrice', function(req, res) {
        res.json({
          errno: 0,
          getPrice: getPrice
        })
      }),
      app.get('/api/createOrder', (req, res) => {
        res.json({
          errno: 0,
          createOrder: createOrder
        })
      }),
      app.get('/api/getOrderList', (req, res) => {
        res.json({
          errno: 0,
          getOrderList: getOrderList
        })
      })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})



