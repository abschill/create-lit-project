#!/usr/bin/env node
"use strict";

const path = require( 'path' );
const fs = require( 'fs-extra' );
const color = require( 'terminal-color' );
const { template, argument } = require( './enums' );


const { 
    addListener, 
    argv, 
    arch, 
    chdir, 
    cwd, 
    emit,
    emitWarning,
    stdout,
    stderr,
    version,
    uptime
} = process;
const args = argv.slice( 2 );

const argName = ( name ) => {
    if( argument.includes( name ) ) {
        return args.filter( e => e.includes( name ) )?.[0]
        ?.split( `--${name}=` )?.pop();
    }
    else {
        stderr.write( `Error: ${name} is not defined by the process` );
        return null;
    }
};

const major_version = version.split( 'v' )
.pop().split( '.' ).shift();


let _cwd = process.cwd();
const _setPath = args[0];

if( _setPath !== '.' ) {
    if( process.platform === 'win32' ) {
        _cwd = _cwd + '\\' + _setPath;
    }
    else {
        _cwd = _cwd + '/' + _setPath;
    }
    _cwd = path.resolve( _cwd );   
}


const template_name = argName( 'template' ) ?? 'default';


const mvInt = parseInt( major_version );
if( mvInt < 16 ) {
    emitWarning( `Node Version ${mvInt} is not LTS, consider updating or you may encounter bugs` );
}

color( 'FgYellow', 'Creating Project in' );
color( 'FgBlue', _cwd );
color( 'FgYellow', `Setting up ${template_name} Project` );

switch( template_name ) {
    case 'tailwind':
        fs.copySync( path.resolve( __dirname, '..', 'packages', 'tailwind' ), _cwd )
        break;
    default: 
        fs.copySync( path.resolve( __dirname, '..', 'packages', 'default' ), _cwd )
        break;
}

color( 'FgGreen', `Process Completed in ${uptime().toFixed(2)} seconds` );
