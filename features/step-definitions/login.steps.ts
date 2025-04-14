import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../support/world";

Given("I am on the login page", async function (this: CustomWorld) {
  const { loginPage } = this;

  console.log(loginPage.url);
  await loginPage.navigate();
});

When(
  "I login with {string} and {string}",
  async function (this: CustomWorld, username: string, password: string) {
    const { loginPage } = this;
    await loginPage.actions.fill(loginPage.usernameInput, username, "Username");
    await loginPage.actions.fill(loginPage.passwordInput, password, "Password");
    await loginPage.actions.click(loginPage.loginButton, "Login Button");
  }
);

Then("I should see an error message", async function (this: CustomWorld) {
  const { loginPage } = this;
  await loginPage.actions.verifyVisible(loginPage.loginError, "Login Error");
});
