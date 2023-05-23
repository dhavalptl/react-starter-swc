import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    mode: "production",
    target: "web",
    devtool: false,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve("dist"),
        clean: true,
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "swc-loader"
            }
        },{
            test: /\.(less)$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "less-loader",
            ],
        },{
            test: /\.(ico|svg|gif|png|jpg|jpeg|eot|ttf|woff2)$/i,
            type: 'asset/resource'
        },]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            favicon: "./public/vite.svg",
            scriptLoading: "module"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
        },
    },
}