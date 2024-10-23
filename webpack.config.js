import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'dist'),
  },
  mode: 'none',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
