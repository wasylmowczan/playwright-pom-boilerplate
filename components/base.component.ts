import { Page } from '@playwright/test';
import { Elements } from '../types/elements.type';
import BasePage from '../pages/base.page';

class BaseComponent extends BasePage {
  public elements: Elements;

  constructor(page: Page) {
    super(page);
    this.elements = {};
  }
}

export default BaseComponent;
