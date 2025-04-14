import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../support/world";

When(
  "I add {string} product to the cart",
  async function (this: CustomWorld, productName: string) {
    const { storePage } = this;
    this.productName = productName;
    await storePage.storeActions.addToCart(productName);
  }
);

When("I continue to the cart", async function (this: CustomWorld) {
  const { storePage } = this;
  await storePage.actions.click(storePage.cartContainer, "Cart Button");
});

Then("I should be in the inventory page", async function (this: CustomWorld) {
  const { storePage } = this;
  await storePage.verifyPageLoaded();
});
