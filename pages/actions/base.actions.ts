import { Page, Locator } from 'playwright';

export class BaseActions {
  constructor(protected page: Page) {}

  async click(locator: Locator, elementName: string): Promise<void> {
    try {
      await locator.click();
    } catch (error) {
      await this.takeScreenshot(`Click ${elementName} Failed`);
      throw new Error(`Failed to click ${elementName}: ${error}`);
    }
  }

  async fill(locator: Locator, text: string, fieldName: string): Promise<void> {
    try {
      await locator.fill(text);
    } catch (error) {
      await this.takeScreenshot(`Fill ${fieldName} Failed`);
      throw new Error(`Failed to fill ${fieldName}: ${error}`);
    }
  }

  async verifyVisible(locator: Locator, elementName: string): Promise<void> {
    if (!(await locator.isVisible())) {
      await this.takeScreenshot(`${elementName} Not Visible`);
      throw new Error(`${elementName} is not visible`);
    }
  }

  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${name.replace(/\s+/g, '_')}.png` });
  }
}
