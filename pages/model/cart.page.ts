import { Page, Locator } from "playwright";
import { BasePage } from "./base.page";
import { CartActions } from "../actions/cart.actions";

export class CartPage extends BasePage {
  readonly url = "https://www.saucedemo.com/v1/cart.html";

  // Elements
  readonly cartTitle: Locator;

  readonly cartActions: CartActions;

  constructor(page: Page) {
    super(page);
    this.cartTitle = page.locator(".subheader");
    this.cartActions = new CartActions(page);
  }

  async verifyPageLoaded(): Promise<void> {
    await this.actions.verifyVisible(this.cartTitle, "Cart Title");
  }

  getCartItem(productName: string): Locator {
    return this.page.locator(
      `.cart_item:has(.inventory_item_name:text-is("${productName}"))`
    );
  }

  async isProductVisible(productName: string): Promise<void> {
    const cartItem = this.getCartItem(productName);
    await this.actions.verifyVisible(cartItem, `${productName} Cart Item`);
  }
}
