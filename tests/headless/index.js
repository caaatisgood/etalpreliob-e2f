// const spawn = require('child_process').spawn
const puppeteer = require('puppeteer')

const headless = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://google.com', { waitUntil: 'networkidle' })
  // Type our query into the search bar
  await page.type('puppeteer')

  await page.click('input[type="submit"]')

  // Wait for the results to show up
  await page.waitForSelector('h3 a')

  // Extract the results from the page
  const links = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('h3 a'))
    return anchors.map(anchor => anchor.textContent)
  })
  console.log(links.join('\n'))
  browser.close()
}

headless()

// start webpack dev server
// spawn('npm run local', { detached: true }, (error, stdout, stderr) => {
//   if (error) {
//     console.error(error)
//     return
//   }
//   console.log(`stdout: ${stdout}`)
//   console.log(`stderr: ${stderr}`)
//   headless()
// }).unref()
