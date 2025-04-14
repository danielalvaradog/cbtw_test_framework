import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/world';

Then('I should see the {string} in the cart list', async function (this: CustomWorld, productName: string) {
    const {cartPage} = this;
    await cartPage.cartActions.isProductVisible(productName)
})

Then('I should be in the cart page', async function (this: CustomWorld) {
    const {cartPage} = this;
    await cartPage.verifyPageLoaded();
  })