
const fs = require( 'fs' )
const path = require( 'path' )
const filterFiles = ( dir ) => fs.readdirSync( dir )
.filter( x => fs.lstatSync( path.join( dir, x ) ).isFile() )
.map(x => path.resolve( dir, x ) );

module.exports = filterFiles;