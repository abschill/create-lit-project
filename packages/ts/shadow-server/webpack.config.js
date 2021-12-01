const path = require( 'path' );
const filterFiles = require( './utils/readDir' );
module.exports = {
    context: path.resolve( __dirname, 'src' ),
    devtool: 'inline-source-map',
    entry: filterFiles( path.join( __dirname, 'src', 'components' ) ),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename:'bundle.js',
        path:path.resolve( __dirname, 'public' )
    },
    resolve: {
        extensions:[ '.ts', '.js' ]
    },
    target: 'web'
}