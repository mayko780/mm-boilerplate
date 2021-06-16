#!/usr/bin/env node
'use strict'

const path = require('path')

const program = require('commander')
const copy = require('recursive-copy')

const currentNodeVersion = process.versions.node
const semver = currentNodeVersion.split('.')
const major = semver[0]

if (major < 10) {
  console.error(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      '@mirkonz-boilerplate requires Node 10 or higher. \n' +
      'Please update your version of Node.'
  )
  process.exit(1)
}

program.version('0.1.0')

program
  .command('init [namespace]')
  .description('Setup WordPress plugin in')
  .action((namespace) => {
    const destination = namespace || 'mirkonz-boilerplate'
    const sourcePath = path.resolve(__dirname, '..')
    const destinationPath = path.resolve(process.cwd(), destination)

    const options = {
      filter: ['**/*', '!**/.git{,/**}', '!**/node_modules{,/**}'],
    }

    copy(sourcePath, destinationPath, options, (err) => {
      if (err) {
        return console.error(err)
      }
      console.log('done!')
    })
  })

program.parse(process.argv)
