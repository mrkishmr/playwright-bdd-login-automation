const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  const isCI = !!process.env.CI;

this.browser = await chromium.launch({
  headless: isCI   // headless=true in GitHub Actions
});
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});