const path = require('path'); // core nodejs 모듈 중 하나, 파일 경로 설정할 때 사용
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(`${__dirname}/build`),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              publicPath: './src/public',
              name: 'fonts/[name].[ext]',
              // outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              fallback: 'url-loader',
              publicPath: './src/public',
              name: 'image/[name].[ext]',
              // outputPath: 'image/',
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              fallback: 'file-loader',
              name: 'image/[name].[ext]',
              outputPath: 'image/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/public', to: '' }],
    }),
  ],
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    extensions: ['.js', '.jsx'],
  },
};
