#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const ascii = chalk.green(
  [
    ` ███╗   ██╗██╗████████╗██╗███╗   ██╗████████╗███████╗`,
    ` ████╗  ██║██║╚══██╔══╝██║████╗  ██║╚══██╔══╝██╔════╝`,
    ` ██╔██╗ ██║██║   ██║   ██║██╔██╗ ██║   ██║   █████╗  `,
    ` ██║╚██╗██║██║   ██║   ██║██║╚██╗██║   ██║   ██╔══╝  `,
    ` ██║ ╚████║██║   ██║   ██║██║ ╚████║   ██║   ██║     `,
    ` ╚═╝  ╚═══╝╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝     `,
  ].join('\n')
);

const heading =
  chalk.bold.green('Nitin Panwar') +
  chalk.dim(' / ') +
  chalk.white('Senior Software Engineer');

const bio = chalk.white(
  `I write code for a living and break it for fun.\n` +
    `Football, games, and travel keep me sane.\n` +
    `Weekends are strictly no-screen zones (mostly).`
);

const links = [
  [chalk.white.bold('      Web'), chalk.cyan('https://nitin.sh')],
  [chalk.white.bold('   GitHub'), chalk.cyan('https://github.com/nitintf')],
  [
    chalk.white.bold(' LinkedIn'),
    chalk.cyan('https://linkedin.com/in/nitin-panwarr'),
  ],
  [chalk.white.bold('  Twitter'), chalk.cyan('https://x.com/nitinpanwarrr')],
  [chalk.white.bold('    Email'), chalk.cyan('contact@nitin.sh')],
].map(([label, value]) => `${label}:  ${value}`);

const cardLine =
  chalk.white.bold('     Card') +
  ':  ' +
  chalk.white('npx') +
  ' ' +
  chalk.green('nitintf');

const output = [heading, '', bio, '', ...links, '', cardLine].join('\n');

const card = boxen(output, {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
});

console.log('\n' + ascii );
console.log(card);
