const path = require( 'path' );
const enums = require( './enums' );
const { cwd, platform }= require( 'process' );
const program = ( config ) => {
    let _path =  path.join( cwd(), config.dirName );

    if( platform === 'win32' ) {
        _path = _path.replace( /\//, '\\' );
    }
    else {
        _path = _path.replace( /\\/, '/' );
    }
    console.log( config );
    // console.log( _path );

    const acceptedParams = config.params.filter( param => enums.params.includes( param ) );
    const acceptedOptions = config.options.filter( opt => enums.options.includes( opt ) );


    const cleanedConfig = {
        writePath: _path,
        params: acceptedParams,
        options: acceptedOptions
    };

    console.log( cleanedConfig );
}


module.exports = program;