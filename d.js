#!/usr/bin/env node

'use strict'

// core
const { URL } = require('url')

// npm
const puppeteer = require('puppeteer')

const run = async () => {
  const u = process.argv[2] && new URL(process.argv[2])
  if (!u) throw new Error('URL required.')
  const browser = await puppeteer.launch()
  let cnt
  try {
    const page = await browser.newPage()
    await page.goto(u)
    cnt = await page.content()
  } finally {
    await browser.close()
    if (cnt) return cnt
    throw new Error('Oups')
  }
}

run()
  .then(console.log)
  .catch((err) => {
    console.error(err)
    process.exitCode = 1
  })
