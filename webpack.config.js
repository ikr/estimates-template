module.exports = {
    entry: "./index.jsx",

    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },

    module: {
        loaders: [
            {test: /\.(jsx|js)$/, loader: "babel-loader"},
            {test: /\.md$/, loader: "raw-loader"},
            {test: /\.json$/, loader: "json-loader"}
        ]
    }
};
