const chalk = require('chalk');
 
console.log(chalk.blue('Happy birthday to you, ') + chalk.red('cha, ')+ chalk.yellow('cha, ')+ chalk.bgGreen('cha.'));
console.log(chalk.greenBright.bold.bgYellowBright('Happy birthday to you, ') + chalk.cyanBright('cha, ')+ chalk.white('cha, ')+ chalk.bgMagenta('cha.'));
console.log(chalk.blue('Happy birthday Dear, ') + chalk.bold.green.underline('A')+ chalk.bold.yellow.underline('D')+ chalk.bold.underline.cyanBright('A')+ chalk.bold.underline.redBright('M.'));
console.log(chalk.italic.magentaBright.bgRedBright('Happy birthday to you, ') + chalk.magenta('cha, ')+ chalk.green('cha, ')+ chalk.redBright('cha.'));