'use strict'

const puppeteer = require('puppeteer')

const run = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://millette.github.io/kyucan/')
  const cnt = await page.content()
  await browser.close()
  return cnt
}

run()
  .then(console.log)
  .catch(console.error)
