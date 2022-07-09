module.exports.gitIgnore = 'node_modules\napi/dist\npublic/*\n!/public/index.html';

module.exports.languageMap = [
    [ 'js', 'javascript' ],
    [ 'ts', 'typescript' ]
];

module.exports.flags = [
    { symbol: '-s', default: 'shadow', alias: '--styles' },
    { symbol: '-l', default: 'js', alias: '--language' },
    { symbol: '-http', default: false, alias: '--server' },
    { symbol: '-o', default: '.', alias: '--output' }
];

module.exports.DEFAULT_README = `
To Start

    yarn install

or

    npm install

then

    yarn dev

if using npm, change package.json scripts to npm not yarn calls
`;

module.exports.WEBPACK_JS = `const {
	join,
	resolve
} = require('path');
const fs = require('fs')

const filterFiles = (dir) => fs.readdirSync(dir)
.filter(x => fs.lstatSync(path.join(dir, x )).isFile())
.map(x => path.resolve(dir, x));

module.exports = {
	context: resolve(__dirname, 'src/components'),
	devtool: 'inline-source-map',
	entry: filterFiles(join( __dirname, 'src', 'components')),
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	output: {
		filename: 'main.js',
		path: resolve(process.cwd(), 'public')
	},
	resolve: {
		extensions: [ '.js' ]
	},
	target: 'web'
}
`;

module.exports.WEBPACK_JS_HTTP = `const {
	join,
	resolve
} = require('path');
const fs = require('fs');

const filterFiles = (dir) => fs.readdirSync(dir)
.filter(x => fs.lstatSync(path.join(dir, x )).isFile())
.map(x => path.resolve(dir, x));

module.exports = {
    context: resolve(__dirname, 'src/components'),
    devtool: 'inline-source-map',
    entry: filterFiles(join(__dirname, 'src', 'components')),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: resolve(process.cwd(), 'public')
    },
    resolve: {
        extensions: [ '.js' ]
    },
    target: 'web',
    devServer: {
        static: join(process.cwd(), 'public'),
        compress: true,
        port: 3000,
    },
}
`;

module.exports.WEBPACK_TS = `const path = require('path');
const fs = require('fs');

const filterFiles = (dir) => fs.readdirSync(dir)
.filter(x => fs.lstatSync(path.join(dir, x)).isFile())
.map(x => path.resolve(dir, x));

module.exports = {
    context: path.resolve(__dirname, 'src/components'),
    devtool: 'inline-source-map',
    entry: filterFiles(path.join(__dirname, 'src', 'components')),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(process.cwd(), 'public')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'web'
}
`;

module.exports.WEBPACK_TS_HTTP = `const path = require('path');
const fs = require('fs');

const filterFiles = (dir) => fs.readdirSync(dir)
.filter(x => fs.lstatSync(path.join(dir, x)).isFile())
.map(x => path.resolve(dir, x));

module.exports = {
    context: path.resolve(__dirname, 'src/components'),
    devtool: 'inline-source-map',
    entry: filterFiles(path.join(__dirname, 'src', 'components')),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(process.cwd(), 'public')
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    target: 'web',
    devServer: {
        static: path.join(process.cwd(), 'public' ),
        compress: true,
        port: 3000,
    },
}
`;
module.exports.manPage = '--help';
