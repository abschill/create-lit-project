const path = require('path' );
const { cwd, platform }= require('process');
const { languageMap, flags, gitIgnore } = require('./enums');
const fs = require('fs-extra');
const color = require('terminal-color');

const setPath = (lang, style, server) => {
    if( !server ) {
        return path.resolve(__dirname, '..', 'packages', lang, style);
    }
    else {
        return path.resolve(__dirname, '..', 'packages', lang, `${style}-server`);
    }
}

const getArg = (config, arg) => {
    return config.filter(flag => flag.flag === arg).shift();
};

const writeFiles = build => {
    const inPath = setPath( build.language, build.styles, build.server);
    fs.copy( inPath, build.outputPath, err => {
        if (err) return color('FgRed', err);
        color( 'FgGreen', 'Success Creating Initial Files at');
        color( 'FgBlue', build.outputPath );
        fs.outputFile(path.resolve( build.outputPath, '.gitignore'), gitIgnore, err => {
            if(err) return color( 'FgRed', 'Error Creating .gitignore');
            color('FgGreen', `Created .gitignore`);
            color('FgGreen', `Created ${build.language} Project with ${build.styles}` );
            console.timeEnd('time');
        } )
    } );
}

const program = (config) => {
    const build = {};
    const flagSymbols = flags.map(flag => flag.symbol);
    color('FgBlue', 'Parsing Args..');
    const flagSymbolsInserted = config.map( arg => {
        if(flagSymbols.includes(arg.flag)) {
            return arg;
        }
        else {
            return null;
        }
    } );
    const unInitializedProps = flags.map(flag => {
        const symbolsInserted = flagSymbolsInserted.map(f => f.flag);
        if(!symbolsInserted.includes(flag.symbol)) {
            return { flag: flag.symbol, value: flag.default };
        }
        else {
            return null;
        }
    } ).filter(e => e);
    color('FgBlue', 'Creating Build Procedure..');
    build.procedure = [...flagSymbolsInserted, ...unInitializedProps];
    color('FgBlue', 'Finding System Path..');
    const pathArg = getArg(build.procedure, '-o');
    let _buildPath =  path.join(cwd(), pathArg.value);
    build.procedure.splice(build.procedure.indexOf( pathArg ), 1);


    if( platform === 'win32' ) {
        _buildPath = _buildPath.replace(/\//, '\\');
    }
    else {
        _buildPath = _buildPath.replace(/\\/, '/');
    } 

    build.outputPath = _buildPath;
    const langArg = getArg(build.procedure, '-l' );
    
    const buildLang = languageMap.filter(lang => lang.includes(langArg.value )).shift()[0];
    build.language = buildLang;
    build.procedure.splice(build.procedure.indexOf(langArg), 1 );

    const buildStyles = getArg( build.procedure, '-s' );
    build.styles = buildStyles.value;
    build.procedure.splice(build.procedure.indexOf(buildStyles), 1 );
    const buildServer = getArg( build.procedure, '-http' )
    build.server = buildServer.value;
    build.procedure.splice( build.procedure.indexOf(buildServer), 1 );

    if( build.procedure.length === 0 ) {
        return writeFiles(build);
    }
    else {
        return color('FgRed', 'Something Went wrong with the procedure');
    }
}


module.exports = program;