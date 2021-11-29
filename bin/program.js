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
    build.outputPath = _buildPath;
    
    const langArg = getArg( build.procedure, '-l' );
    
    const buildLang = languageMap.filter( lang => lang.includes( langArg.value ) ).shift()[0];
    build.language = buildLang;
    build.procedure.splice(  build.procedure.indexOf( langArg ), 1 );

    const buildStyles = getArg( build.procedure, '-s' );
    build.styles = buildStyles.value;
    build.procedure.splice(  build.procedure.indexOf( buildStyles ), 1 );

    const buildServer = getArg( build.procedure, '-http' )
    build.server = buildServer.value;
    build.procedure.splice( build.procedure.indexOf( buildServer ), 1 );
    
    const buildDecorators = getArg( build.procedure, '-d' );
    build.decorators = buildDecorators.value;
    build.procedure.splice( build.procedure.indexOf( buildDecorators ), 1 );

    console.log( build );
    
}


module.exports = program;