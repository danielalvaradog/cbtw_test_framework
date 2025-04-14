import { Page } from 'playwright';
import { BaseActions } from '../actions/base.actions';

export abstract class BasePage {
  readonly actions: BaseActions;
  abstract url: string;

  constructor(protected page: Page) {
    this.actions = new BaseActions(page);
  }

  async navigate(): Promise<void> {
    console.log(this.url)
    await this.page.goto(this.url);
    await this.verifyPageLoaded();
  }

  abstract verifyPageLoaded(): Promise<void>;
}