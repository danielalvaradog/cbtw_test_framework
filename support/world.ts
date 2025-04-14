import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";
import { Browser, Page, APIRequestContext } from "playwright";
import { LoginPage } from "../pages/model/login.page";
import { StorePage } from "../pages/model/store.page";
import { CartPage } from "../pages/model/cart.page";

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  apiContext!: APIRequestContext;

  loginPage!: LoginPage;
  storePage!: StorePage;
  cartPage!: CartPage;

  productName!: string;

  constructor(options: IWorldOptions) {
    super(options);
  }

  initPages() {
    if (this.page) {
      this.loginPage = new LoginPage(this.page);
      this.storePage = new StorePage(this.page);
      this.cartPage = new CartPage(this.page);
    }
  }
}

setWorldConstructor(CustomWorld);
