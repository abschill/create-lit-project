const colors = require('./constants');
const color = (color_code, msg) => {
    let keyLen, _msg = msg;
    if(typeof( _msg ) === 'function') _msg = msg();
    const isString = typeof(_msg) === 'string';
    const isArray = Array.isArray(_msg) && !isString;
    const isObject = (typeof(_msg) === 'object') && !isArray;
    if( isObject ) {
        keyLen = Object.keys(_msg).length;
    }
    const _color = colors[color_code];
    const isTinyObj = keyLen && keyLen < 10;
    const _print = isString || isArray || isTinyObj;    
    if(_color){
        if(_print){
            return console.log(_color, _msg);
        }else{
            return console.log(_color, JSON.stringify( _msg));
        }
   }else{
        if(_print){
            return console.log(_msg);
        }else{
            return console.log(JSON.stringify( _msg));
        }
   }
}

module.exports = color;