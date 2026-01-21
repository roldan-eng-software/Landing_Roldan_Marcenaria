const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Listen for console events
  page.on('console', msg => {
    console.log(`>> ${msg.type()}: ${msg.text()}`);
  });

  // Navigate to the local server
  await page.goto('http://localhost:8000');

  // Check if the ad script is present
  const adScript = await page.evaluate(() => {
    return document.querySelector('script[src="https://pl28531626.effectivegatecpm.com/55/69/38/5569382a681a733bf39eeca1b7bc206c.js"]');
  });

  if (adScript) {
    console.log('Ad script found on page.');
  } else {
    console.log('Ad script not found on page.');
  }

  await browser.close();
})();
