#!/usr/bin/env node

import program from 'commander';
import { tsMock } from '../faker-ts';

const command = program.createCommand("0.0.1");

command
  .usage("<file> <symbol>")
  // tslint:disable-next-line:variable-name
  .action((file, symbol) => {
    const mocker = tsMock([file]);
    console.log(JSON.stringify(mocker.generateMock(symbol), null, 2));
  });

command.parse(process.argv);
