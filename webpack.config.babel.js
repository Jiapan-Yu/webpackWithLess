/* import HtmlWebPackPlugin from 'html-webpack-plugin'

// const HtmlWebPackPlugin = require('html-webpack-plugin');

export default {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Codejobs',
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}; */

// Configuration
import { devtool, module, optimization, plugins, resolve, entry, mode, output } from './webpack/configuration'

export default {
  devtool,
  module,
  optimization,
  plugins,
  resolve, 
  entry, 
  mode, 
  output
};
