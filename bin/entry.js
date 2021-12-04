#!/usr/bin/env node
const { argv, version, emitWarning } = require( 'process' );
const { flags, manPage } = require( './enums' );
const program = require( './program' );
const printManPage = require( './manpage' );
const run = () => {
    console.time( 'time' );
    const programArg = argv.splice( 2 );
    const major_version = version.split( 'v' )
    .pop().split( '.' ).shift();
    
    
    if( programArg.includes( manPage ) ) {
        return printManPage();
    }
    else {
        const mvInt = parseInt( major_version );
        if( mvInt < 16 ) {
            emitWarning( `Node Version ${mvInt} is not LTS, consider updating or you may encounter bugs` );
        }
        
        const args = flags.map( flag => {
            const sym = programArg.indexOf( flag.symbol );
            const alias = programArg.indexOf( flag.alias );
            if( sym !== -1 ) {
                return flag.symbol === '-http' ? 
                { flag: flag.symbol, value: true }:
                { flag: flag.symbol, value: programArg[sym + 1] };
            }
            else if( alias !== -1 ) {
                return flag.alias === '--server' ?
                { flag: flag.symbol, value: true }:
                { flag: flag.symbol, value: programArg[alias + 1] };
            }
            else {
                return null;
            }
        } ).filter( e => e );
        program( args );
    }
//

    
}
run();