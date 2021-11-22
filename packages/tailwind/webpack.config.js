const path = require( 'path' );
const filterFiles = require( './utils/readDir' );
module.exports = {
    context: path.resolve( __dirname, 'src/components' ),
    devtool: 'inline-source-map',
    entry: filterFiles( path.join( __dirname, 'src', 'components' ) ),
    module: {
        rules: [
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        // filename:'bundle.js',
        path:path.resolve( process.cwd(), 'public' )
    },
    resolve: {
        extensions:[ '.ts', '.js' ]
    },
    target: 'web',
    devServer: {
        contentBase: path.join( process.cwd(), 'public' ),
        compress: true,
        port: 3000,
      },
}