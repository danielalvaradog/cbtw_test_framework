import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  // Browser setup
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();

  this.initPages();
});

After(async function (this: CustomWorld, scenario) {
  // Attach screenshot on failure
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot({ path: `screenshots/${scenario.pickle.name}.png`, type: 'png' });
    await this.attach(screenshot, 'image/png');
  }

  // Cleanup
  await this.browser.close();
});
