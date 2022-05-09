// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

// const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const stylesHandler = MiniCssExtractPlugin.loader;

// ^------------------------ add side plugins ------------------------
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // #asm подключения плагина для очистики
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// ^------------------------ optimization ------------------------
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all', // #asm оптимизация кода для выненесния повторющихся кодов в одельные чанки
    },
  };
  if (isProduction) {
    config.minimizer = [
      new CssMinimizerPlugin(), // #asm оптимизация css
    ];
  }
  return config;
};

const filename = (ext) => (isProduction ? `[name].[hash].${ext}` : `[name].${ext}`);

// >----------------------------------------------------------------<
// >                             CONFIG                             <
// >----------------------------------------------------------------<
const config = {
  context: path.resolve(__dirname, 'src'), // #asm указываем глобальный контекст для поиска файлов, уже не нужно кругом писать путь к рабочей директории
  // ????? теперь в файле индексам можно указивать относительный путь через @

  // ^------------------------ entry ------------------------
  entry: {
    index: './index.js', // #asm основной путь к файлу вхождения в сборку
    // another: './another.js', // #asm путь к дополнительному файлу
    // для того, что бы не было конфликтов в output нужно задать
    // генерацию уникального имени для filename
    // например filename: '[name]-bundle.js'
  },

  devtool: isProduction ? false : 'source-map', // #asm подключение карты кода для разработки

  // ^------------------------ output ------------------------
  output: {
    path: path.resolve(__dirname, 'dist'), // #asm путь к директории выхода
    // filename: 'bundle.js', // #asm имя файла выхода
    filename: filename('js'), // #asm имя файла выхода
    // filename: '[hash]-bundle.js',
  },

  // ^------------------------ optimization ------------------------
  optimization: optimization(),

  // ^------------------------ resolve ------------------------
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.json'], // #asm указиваем расширения, которые можно упускать в index.js
    alias: { // #asm сокращение которые можно использовтаь в путях
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@scripts': path.resolve(__dirname, 'src/scripts'),
    },
  },

  // ^------------------------ devServer ------------------------
  devServer: {
    open: true,
    host: 'localhost',
    hot: false,
  },

  // ^------------------------ plugins ------------------------
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      // filename: filename('html'), // #asm имя файла выхода
      // filename: '[hash]_another-name.html', // #asm возможность переименовать файл при билде
      // minify: false, // #asm отключение минификации
      inject: 'body', // #asm вставка js в конец body
    }),
    new CleanWebpackPlugin(), // #asm плагин для очистки
    new CopyWebpackPlugin({ // #asm плагин для переноса файлов
      patterns: [
        { from: 'assets/favicon.ico', to: 'assets' },
        { from: 'assets/img', to: 'assets/img' },
        { from: 'assets/svg', to: 'assets/svg' },
      ],
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],

  // ^------------------------ modules / loaders ------------------------
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
        // type: 'asset/resource',
      },
      {
        test: /\.mp3$/i,
        type: 'file-loader',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

// >----------------------------------------------------------------<
// >                          MODULE EXPORT                         <
// >----------------------------------------------------------------<
module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';

    config.plugins.push(new MiniCssExtractPlugin({
      filename: filename('css'), // #asm имя файла выхода
    }));
  }
  return config;
};
