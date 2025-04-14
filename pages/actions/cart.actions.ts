import { Page, Locator } from "playwright";
import { BaseActions } from "./base.actions";
import { CartPage } from "../model/cart.page";

export class CartActions extends BaseActions {
  constructor(page: Page) {
    super(page);
  }

  async isProductVisible(productName: string): Promise<void> {
    const cartPage = new CartPage(this.page);
    const cartItem = cartPage.getCartItem(productName);
    await cartPage.actions.verifyVisible(cartItem, `${productName} Cart Item`);
  }
}
