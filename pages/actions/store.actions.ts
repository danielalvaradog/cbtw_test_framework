import { Page, Locator } from "playwright";
import { BaseActions } from "./base.actions";
import { StorePage } from "../model/store.page";

export class StoreActions extends BaseActions {
  constructor(page: Page) {
    super(page);
  }

  async addToCart(productName: string): Promise<void> {
    const storePage = new StorePage(this.page);
    try {
      await this.click(
        storePage.getProductAddToCartButton(productName),
        productName
      );
    } catch (error) {
      await this.takeScreenshot(`Click ${productName} Failed`);
      throw new Error(`Failed to click ${productName}: ${error}`);
    }
  }
}
