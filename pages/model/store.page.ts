import { Page, Locator } from 'playwright';
import { BasePage } from './base.page';
import { StoreActions } from '../actions/store.actions';

export class StorePage extends BasePage {

    readonly url = 'https://www.saucedemo.com/v1/inventory.html';
    //Elements 
    readonly inventoryTitle: Locator;
    readonly cartContainer: Locator

    readonly storeActions: StoreActions;
   
    constructor(page: Page) {
        super(page);
        this.inventoryTitle = page.locator('.product_label');
        this.cartContainer = page.locator('#shopping_cart_container')
        this.storeActions = new StoreActions(page)
    }

    async verifyPageLoaded(): Promise<void> {
        await this.actions.verifyVisible(this.inventoryTitle, 'Inventory Title');
      }

    getProductAddToCartButton(productName: string): Locator {
        return this.page.locator(
            `.inventory_item:has(.inventory_item_name:text-is("${productName}")) .btn_inventory`
        );
    }
}