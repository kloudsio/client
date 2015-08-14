#!/bin/babel-node

import rc from './loader'
import parseArgs from 'minimist'

let [cmd, app] = parseArgs(process.argv.slice(2))._

if (typeof rc[app] === 'undefined') {
  console.error('That app was not found')
  process.exit()
}

if (typeof rc[app][cmd] !== 'function') {
  console.error('That command does not exist')
  process.exit()
}


let child = rc[app][cmd]()
