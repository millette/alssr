#!/usr/bin/env node

'use strict'

// self
const run = require('.')

run()
  .then(console.log)
  .catch((err) => {
    console.error(err)
    process.exitCode = 1
  })
