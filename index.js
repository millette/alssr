'use strict'

// core
const { URL } = require('url')

// npm
const puppeteer = require('puppeteer')

module.exports = async () => {
  const u = process.argv[2] && new URL(process.argv[2])
  if (!u) throw new Error('URL required.')
  const browser = await puppeteer.launch()
  let cnt
  try {
    const page = await browser.newPage()
    const a = await page.goto(u, { waitUntil: 'networkidle0' })
    if (!a) throw new Error("What's going on?")
    if (!a.ok()) throw new Error(`Status code: ${a.status()}`)
    cnt = await page.content()
  } finally {
    await browser.close()
    if (cnt) return cnt
  }
}
