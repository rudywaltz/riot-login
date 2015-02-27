module.exports = {
    entry: "./src/entry.js",
    debug: true,
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass?indentedSyntax=sass"
            }
        ]
    }
};