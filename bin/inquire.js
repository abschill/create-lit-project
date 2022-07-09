const i = require('inquirer');
const { join } = require('path');
const { copy } = require('fs-extra');
const color = require('terminal-color');
const fs = require('fs');
const {
	WEBPACK_JS,
	WEBPACK_JS_HTTP,
	WEBPACK_TS,
	WEBPACK_TS_HTTP
} = require('./enums');

function exit_success(answers) {
	if(answers.language === 'js') {
		const confString = answers.server ? WEBPACK_JS_HTTP : WEBPACK_JS;
		fs.writeFileSync(`${answers.path}/webpack.config.js`, confString);
	}
	else {
		const confString = answers.server ? WEBPACK_TS_HTTP : WEBPACK_TS;
		fs.writeFileSync(`${answers.path}/webpack.config.js`, confString);
	}
    color('FgGreen', 'Success.');
    process.exit(0);
}

function exit_err(e) {
    color('FgRed', 'Error.');
    console.error(e);
    process.exit(1);
}

module.exports = function() {
    i.prompt([
        {
            type: 'list',
            name: 'language',
            message: 'choose language',
            choices: ['js', 'ts']
        },
        {
            type: 'list',
            name: 'styles',
            message: 'choose style system',
            choices: ['css', 'sass', 'shadow', 'tailwind']
        },
        {
            type: 'confirm',
            name: 'server',
            message: 'package server with project?',
            choices: ['y', 'n']
        },
        {
            type: 'input',
            name: 'path',
            message: 'choose project path'
        }
    ]).then(answers => {
        const subPath = answers.server ? `${answers.styles}-server` : answers.styles;
        const upLevel = join(__dirname, '..');
        const copyPath = join(`${upLevel}/packages/${answers.language}/${subPath}`);
        console.log(`Path: ${copyPath}`);
        const writePath = join(process.cwd(), answers.path);
        console.log(writePath);
        copy(copyPath, writePath)
        .then(() => exit_success(answers))
        .catch(exit_err);
    });
	return;
};
