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
            }
        ]
    },
    output: {
        filename:'bundle.js',
        path:path.resolve( __dirname, 'public' )
    },
    resolve: {
        extensions:[ '.js' ]
    },
    target: 'web',
    devServer: {
        static: path.join( __dirname, 'public' ),
        compress: true,
        port: 3000,
      },
}