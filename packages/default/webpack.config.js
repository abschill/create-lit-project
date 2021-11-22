const path = require( 'path' );
const filterFiles = require( './utils/readDir' );
module.exports = {
    context: path.resolve( __dirname, 'src' ),
    devtool: 'inline-source-map',
    entry: filterFiles( path.join( __dirname, 'src', 'components' ) ),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename:'bundle.js',
        path:path.resolve( __dirname, 'dist' )
    },
    resolve: {
        extensions:[ '.ts', '.js' ]
    },
    target: 'web',
    devServer: {
        contentBase: path.join( __dirname, 'dist' ),
        compress: true,
        port: 3000,
      },
}