module.exports = {
    entry: "./index.js",

    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },

    resolve: {
        extensions: ['', '.js', '.json']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {test: /\.md$/, loader: "raw-loader"},
            {test: /\.json$/, loader: "json-loader"}
        ]
    }
};
