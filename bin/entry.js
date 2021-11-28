const { argv, version, emitWarning } = require( 'process' );
const program = require( './program' );
const args = argv.slice( 2 );
let dirName = args[0].includes( '-' ) ? 'undefined' : args.shift();

if( dirName === '.' ) {
    dirname = '';
}

const params = [], 
      options = [],
      configArgs = args.filter( arg => !( arg[0] !== '-' && arg[1] !== '-' ) );

configArgs.forEach( arg => {
    const t = arg.split( '--' ).pop();
    if( t.includes( '-' ) ) {
        options.push( t.split( '-' ).pop() );
    }
    else {
        params.push( t );
    }
} );
const config = {
    dirName,
    params, 
    options
}

const major_version = version.split( 'v' )
.pop().split( '.' ).shift();

const mvInt = parseInt( major_version );
if( mvInt < 16 ) {
    emitWarning( `Node Version ${mvInt} is not LTS, consider updating or you may encounter bugs` );
}

program( config );