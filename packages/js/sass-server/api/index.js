const express = require( 'express' );
const api = express();
const { createServer } = require( 'http' );
const path = require( 'path' );
api.set( 'x-powered-by', false );

api.use( express.json() );


api.use( express.static( path.join( process.cwd(), 'public' ) ) );


api.get( '*', async ( req, res ) => res.status( 404 ).json( { msg: 'Not Found' } ) ); 

const server = createServer( api );

module.exports = server;