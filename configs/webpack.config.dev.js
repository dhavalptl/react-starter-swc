import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export default {
    mode: "development",
    target: "web",
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true,
        open: true,
        compress: true
    },
    entry: "./src/index.tsx",
    output: {
        publicPath: "http://localhost:3000/"
    },
    cache: {
        type: "filesystem",
        allowCollectingMemory: true,
        buildDependencies: {
            config: [fileURLToPath(import.meta.url)]
        },
        cacheDirectory: path.resolve("node_modules/.cache/webpack")
    },    
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "swc-loader"
            }
        },{
            test: /\.(css|less)$/i,
            use: [
              // compiles Less to CSS
              "style-loader",
              "css-loader",
              "less-loader",
            ],
        }, {
            test: /\.(?:ico|gif|svg|png|jpg|jpeg|eot|ttf|woff2)$/i,
            type: 'asset/resource'
        }]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            favicon: "./public/vite.svg"
        }),
        new ReactRefreshWebpackPlugin()
    ]
}