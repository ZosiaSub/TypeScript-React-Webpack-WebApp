const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require('./build-utils/webpack.${env')(env);
const path = require('path');

module.exports = (env) => {
    return {
        entry: "index.tsx",
        output: {
            path: path.join(__dirname, 'dist'),
            filename: "bundle.js",
            publicPath: '/'
        },
        mode: env.mode,

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 8080
        },

        resolve: {
            modules: ["src", "node_modules"],
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                "@material-ui/styles": path.resolve(__dirname, "node_modules", "@material-ui/styles")
            }
            
        },

        module: {
            rules: [
                { test: /\.ts(x?)$/, use: "ts-loader" },
                { test: /\.js(x?)$/, use: "babel-loader" },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                },
            ],
        },

        plugins: [new HtmlWebpackPlugin({ template: './src/index.html', filename: "index.html" })]
    }
};
