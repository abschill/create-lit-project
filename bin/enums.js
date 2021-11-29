module.exports.template = [
    'default',
    'tailwind',
    'sass',
    'full-default'
];

module.exports.argument = [
    'template',
    'path'
];

module.exports.languageMap = [
    [ 'js', 'javascript' ],
    [ 'ts', 'typescript' ]
];

module.exports.params = [
    'tailwind',
    'sass',
    'shadow',
    'css'
];

module.exports.options = [
    'server',
    'decorators',
    'ssr'
];


module.exports.flags = [
    { symbol: '-s', default: 'shadow', alias: '--styles' },
    { symbol: '-l', default: 'js', alias: '--language' },
    { symbol: '-d', default: false, alias: '--decorators' },
    { symbol: '-http', default: false, alias: '--server' },
    { symbol: '-o', default: '.', alias: '--output' }
]