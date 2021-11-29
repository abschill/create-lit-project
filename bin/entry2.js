const { argv, version, emitWarning } = require( 'process' );
const { flags } = require( './enums' );
const program = require( './program' );
const programArg = argv.splice( 2 );
const major_version = version.split( 'v' )
.pop().split( '.' ).shift();

const mvInt = parseInt( major_version );
if( mvInt < 16 ) {
    emitWarning( `Node Version ${mvInt} is not LTS, consider updating or you may encounter bugs` );
}

const args = flags.map( ( flag, idx ) => {
    const sym = programArg.indexOf( flag.symbol );
    const alias = programArg.indexOf( flag.alias );
    if( sym !== -1 ) {

        if( flag.symbol === '-http' ) {
            return { flag: flag.symbol, value: true };
        }
        else {
            return { flag: flag.symbol, value: programArg[sym + 1] };
        }
        
    }
    else if( alias !== -1 ) {
        if( flag.alias === '--server' ) {
            return { flag: flag.symbol, value: true }
        }
        else {
            return { flag: flag.symbol, value: programArg[alias + 1] };
        }
        
    }
    else {
        return null;
    }
} ).filter( e => e );
program( args );