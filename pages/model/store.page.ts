import { Page, Locator } from 'playwright';
import { BasePage } from './base.page';

export class StorePage extends BasePage {

    readonly url = 'https://www.saucedemo.com/v1/inventory.html';
    //Elements 
    readonly inventoryTitle: Locator;
   
    constructor(page: Page) {
        super(page);
        this.inventoryTitle = page.locator('.product_label')

    }

    async verifyPageLoaded(): Promise<void> {
        await this.actions.verifyVisible(this.inventoryTitle, 'Inventory Title');
      }
}