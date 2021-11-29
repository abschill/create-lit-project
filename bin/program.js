const path = require( 'path' );
const { cwd, platform }= require( 'process' );
const { languageMap, flags } = require( './enums' );
const fs = require( 'fs-extra' );
const color = require( 'terminal-color' );

const getArg = ( config, arg ) => {
    return config.filter( flag => flag.flag === arg ).shift();
};

const buildTS = ( build ) => {
    let inPath;
    switch( build.styles ) {
        case 'sass':
            if( !build.server ) {
                inPath = path.join( process.cwd(), 'packages', 'ts', 'sass' );
            }
            else {
                inPath = path.join( process.cwd(), 'packages', 'ts', 'sass-server' );
            }
            return inPath;
        case 'tailwind':
            if( !build.server ) {
                inPath = path.join( process.cwd(), 'packages', 'ts', 'tailwind' );
            }
            else {
                inPath = path.join( process.cwd(), 'packages', 'ts', 'tailwind-server' );
            }
            return inPath;
        case 'css':
            if( !build.server ) {
                inPath = path.join( process.cwd(), 'packages', 'ts', 'css' );
            }
            else {
                inPath = path.join( process.cwd(), 'packages', 'ts', 'css-server' );
            }
            return inPath;
        case 'shadow':
            if( !build.server ) {
                inPath = path.join( process.cwd(), 'packages', 'ts', 'shadow' );
            }
            else {
                inPath = path.join( process.cwd(), 'packages', 'ts', 'shadow-server' );
            }
            return inPath;
        default:
            break;
        
    }
}

const buildJS = ( build ) => {
    let inPath;
    switch( build.styles ) {
        case 'sass':
            if( !build.server ) {
                inPath = path.join( process.cwd(), 'packages', 'js', 'sass' );
            }
            else {
                inPath = path.join( process.cwd(), 'packages', 'js', 'sass-server' );
            }
            return inPath;
        case 'tailwind':
            if( !build.server ) {
                inPath = path.join( process.cwd(), 'packages', 'js', 'tailwind' );
            }
            else {
                inPath = path.join( process.cwd(), 'packages', 'js', 'tailwind-server' );
            }
            return inPath;
        case 'css':
            if( !build.server ) {
                inPath = path.join( process.cwd(), 'packages', 'js', 'css' );
            }
            else {
                inPath = path.join( process.cwd(), 'packages', 'js', 'css-server' );
            }
            return inPath;
        case 'shadow':
            if( !build.server ) {
                inPath = path.join( process.cwd(), 'packages', 'js', 'shadow' );
            }
            else {
                inPath = path.join( process.cwd(), 'packages', 'js', 'shadow-server' );
            }
            return inPath;
        default:
            break;
    }
}



const program = ( config ) => {
    const build = {};
    // console.log( config );
    const flagSymbols = flags.map( flag => flag.symbol );
    const flagSymbolsInserted = config.map( arg => {
        if( flagSymbols.includes( arg.flag ) ) {
            return arg;
        }
        else {
            return null;
        }
    } );
    // console.log( flagSymbolsInserted );
    const unInitializedProps = flags.map( flag => {
        const symbolsInserted = flagSymbolsInserted.map( f => f.flag );
        if( !symbolsInserted.includes( flag.symbol ) ) {
            return { flag: flag.symbol, value: flag.default };
        }
        else {
            return null;
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


    if( build.procedure.length === 0 ) {
        if( build.language === 'js' ) {
            const inPath = buildJS( build );
            fs.copySync( inPath, build.outputPath );
        }
        else if( build.language === 'ts' ) {
            const inPath = buildTS( build );
            fs.copySync( inPath, build.outputPath );
        }
    }
    else {
        console.error( 'edge case' );
    }
    
}


module.exports = program;