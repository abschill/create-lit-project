const fs = require( 'fs' );
const path = require( 'path' );
module.exports = ( ) => {
    const txt = fs.readFileSync( path.resolve( process.cwd(), 'docs/manpage.txt' ) ).toString( 'utf-8' );
    return console.log( txt );
};