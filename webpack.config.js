const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require('./build-utils/webpack.${env')(env);

module.exports = (env) => {
    return {
        entry: "index.tsx",
        output: {
            filename: "bundle.js"
        },
        mode: env.mode,

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        resolve: {
            modules: ["src", "node_modules"],
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js"]
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
