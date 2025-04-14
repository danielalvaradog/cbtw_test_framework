import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../support/world";

Then(
  "I should see the product in the cart list",
  async function (this: CustomWorld) {
    const { cartPage } = this;
    await cartPage.cartActions.isProductVisible(this.productName);
  }
);

Then("I should be in the cart page", async function (this: CustomWorld) {
  const { cartPage } = this;
  await cartPage.verifyPageLoaded();
});
