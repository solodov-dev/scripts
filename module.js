#!/usr/bin/env node

path = require('path');
fs = require('fs');

let MODULE_NAME = process.argv[2];
const CURRENT_DIR = process.cwd();

if (!MODULE_NAME) {
  MODULE_NAME = path.basename(path.resolve(CURRENT_DIR));
}

const PATH = path.join(CURRENT_DIR, MODULE_NAME);
const TSX_PATH = PATH + '.tsx';
const SCSS_PATH = PATH + '.module.scss';

const TSX_CONTENT = `import React from 'react'
import styles from './${MODULE_NAME}.module.scss'

export default function ${MODULE_NAME[0].toUpperCase() + MODULE_NAME.slice(1)}() { 
  return (
    <div className={styles.${MODULE_NAME}}>

    <div/>
  )
}
`

const SCSS_CONTENT = `.${MODULE_NAME} {

}
`


try {
  fs.writeFile(TSX_PATH, TSX_CONTENT, (err) => err);
  fs.writeFile(SCSS_PATH, SCSS_CONTENT, (err) => err);
  console.log('Files have been written: \n',TSX_PATH, '\n', SCSS_PATH);
} catch(e) {
  console.error(e);
}

