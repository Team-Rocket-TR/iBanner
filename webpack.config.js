const path = require('path'); // core nodejs 모듈 중 하나, 파일 경로 설정할 때 사용
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, // /\.(woff|woff2|ttf|eot)$/,
        use: [// 'file-loader?name=fonts/[name].[ext]!static',
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }), // 생성한 템플릿 파일
  ],
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ],
    extensions: ['.js', '.jsx'],
  },
};
