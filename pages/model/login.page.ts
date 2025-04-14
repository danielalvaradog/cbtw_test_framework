import { Page, Locator } from 'playwright';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {

    readonly url = 'https://www.saucedemo.com/v1/';
    //Elements 
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    //errors
    readonly loginError: Locator;


    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.loginError = page.locator('[data-test="error"]')
    }

    async verifyPageLoaded(): Promise<void> {
        await this.actions.verifyVisible(this.usernameInput, 'Username Field');
        await this.actions.verifyVisible(this.loginButton, 'Login Button');
      }
}