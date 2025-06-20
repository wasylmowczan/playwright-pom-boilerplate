import { Page, expect } from '@playwright/test';
import { Elements } from '../types/elements.type';
import { Components } from '../types/components.type';
import { CREDENTIALS } from '../shared/config/credentials.config';

export default class BasePage {
  page: Page;
  elements: Elements;
  components: Components;
  url: string;

  constructor(page: Page) {
    this.page = page;
    this.elements = {};
    this.components = {};
    this.url = CREDENTIALS.url;
  }

  // INFO: ACTIONS
  public async open() {
    await this.page.goto(this.url as string);
  }

  public async click(selectorKey: string) {
    await (await this.getElement(selectorKey)).click();
  }

  public async typeIn(selectorKey: string, text: string) {
    await (await this.getElement(selectorKey)).fill(text, { force: true });
  }

  // INFO: ASSERTIONS
  public async shouldContain(selectorKey: string, text: string) {
    const element = await this.getElement(selectorKey);
    if (selectorKey.toLowerCase().includes('input')) {
      const elementText = await element.inputValue();
      return expect(elementText).toEqual(text);
    }
    return await expect(element).toContainText(text);
  }

  public async shouldBeOnPageUrl() {
    await expect(this.page).toHaveURL(this.url);
  }

  public async shouldNotBeVisible(selectorKey: string) {
    await expect(await this.getElement(selectorKey)).not.toBeVisible();
  }

  public async shouldHaveSize(selectorKey: string, size: number) {
    expect(await this.page.$$(this.selectorKeyWrapper(selectorKey))).toHaveLength(size);
  }

  // INFO: HELPERS
  private getWrapper(elementName: string) {
    const [type, ...rest] = elementName.split(':');
    const name = rest.join(':');
    switch (type) {
      case 'TEXT': {
        return this.page.locator(`text="${name}"`);
      }
      case 'APPROX-TEXT': {
        return this.page.locator(`text=${name}`);
      }
      default:
        return this.page.locator(elementName);
    }
  }

  private selectorKeyWrapper(selectorKey: string) {
    if (this.elements.hasOwnProperty(selectorKey)) {
      return this.elements[selectorKey];
    }
    return selectorKey;
  }

  public async getElement(selectorKey: string) {
    const element = this.getWrapper(this.selectorKeyWrapper(selectorKey));
    return element;
  }
}
