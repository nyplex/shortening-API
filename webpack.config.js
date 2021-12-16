const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    devServer: {
        static: './dist/',
    },
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.(html)$/,
            use: ["html-loader"]
         },
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "index.html",
          minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
          }),
    ],
};