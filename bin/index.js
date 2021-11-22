#!/usr/bin/env node
"use strict";

const path = require( 'path' );
const fs = require( 'fs' );
const color = require( 'terminal-color' );

const { 
    addListener, 
    argv, 
    arch, 
    chdir, 
    cwd, 
    execArgv,
    emit,
    emitWarning,
    stdout,
    stderr,
    version,
    uptime
} = process;


const major_version = version.split( 'v' )
.pop().split( '.' ).shift();

const _cwd = process.cwd();

const mvInt = parseInt( major_version );
if( mvInt < 16 ) {
    process.emitWarning( `Node Version ${mvInt} is not LTS, consider updating or you may encounter bugs` );
}
color( 'FgBlue', 'Creating Project in' );
color( 'FgBlue', _cwd );

// process.stdout.write( mvInt > 14 );
// console.log( mvInt );
// process.emitWarning( 'FooBar' );