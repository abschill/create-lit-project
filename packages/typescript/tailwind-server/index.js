const { api } = require( './api/dist' );

api.listen( 3000, () => console.log( 'api listening' ) );