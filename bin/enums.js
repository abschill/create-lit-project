module.exports.languageMap = [
    [ 'js', 'javascript' ],
    [ 'ts', 'typescript' ]
];
module.exports.flags = [
    { symbol: '-s', default: 'shadow', alias: '--styles' },
    { symbol: '-l', default: 'js', alias: '--language' },
    { symbol: '-http', default: false, alias: '--server' },
    { symbol: '-o', default: '.', alias: '--output' }
]