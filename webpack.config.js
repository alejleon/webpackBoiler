const path = require('path');

module.exports = {

  entry: '/home/al/linux/webpackBoiler/index.js'

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  }

  mode: 'development'
}