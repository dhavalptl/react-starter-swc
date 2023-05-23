import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    mode: "development",
    target: "web",
    devtool: false,
    entry: "./src/pvt.test.tsx",
    output: {
        path: path.resolve("dist/pvt"),
        filename: 'pvt.test.js'
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
        })
    ],
    optimization: {
        minimize: true
    }
}