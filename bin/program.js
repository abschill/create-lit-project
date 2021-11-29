const path = require( 'path' );
const { cwd, platform }= require( 'process' );
const { languageMap, flags } = require( './enums' );
const getArg = ( config, arg ) => {
    return config.filter( flag => flag.flag === arg ).shift();
};

const program = ( config ) => {
    const build = {};
    // console.log( config );
    const flagSymbols = flags.map( flag => flag.symbol );
    const flagSymbolsInserted = config.map( arg => {
        if( flagSymbols.includes( arg.flag ) ) {
            return arg;
        }
        else {
            return null
        }
    } );
    // console.log( flagSymbolsInserted );
    const unInitializedProps = flags.map( flag => {
        const symbolsInserted = flagSymbolsInserted.map( f => f.flag );
        if( !symbolsInserted.includes( flag.symbol ) ) {
            return { flag: flag.symbol, value: flag.default };
        }
        else {
            return null
        }
    } ).filter( e => e );
    build.procedure = [...flagSymbolsInserted, ...unInitializedProps ];

    const pathArg = getArg( build.procedure, '-o' );
    let _buildPath =  path.join( cwd(), pathArg.value  );
    
    //Remove Path arg from procedure todo
    build.procedure.splice(  build.procedure.indexOf( pathArg ), 1 );


    if( platform === 'win32' ) {
        _buildPath = _buildPath.replace( /\//, '\\' );
    }
    else {
        _buildPath = _buildPath.replace( /\\/, '/' );
    } 
    //format path arg into the relative path
    build.outputPath = _buildPath;

    //Todo: parse next argset after path then build the corresponding dir
    console.log( build );
    
}


module.exports = program;