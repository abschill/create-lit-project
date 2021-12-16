const path = require( 'path' );
const filterFiles = require( './utils/readDir' );
module.exports = {
    context: path.resolve( __dirname, 'src/components' ),
    devtool: 'inline-source-map',
    entry: filterFiles( path.join( __dirname, 'src', 'components' ) ),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve( process.cwd(), 'public' )
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    target: 'web',
    devServer: {
        static: path.join( process.cwd(), 'public' ),
        compress: true,
        port: 3000,
    },
}