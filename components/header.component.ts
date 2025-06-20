import { Page } from '@playwright/test';
import BaseComponent from './base.component';

class HeaderComponent extends BaseComponent {
  constructor(page: Page) {
    super(page);
    this.elements = {
      productsTab: 'data-testid="navbar-products"',
    };
  }
}

export default HeaderComponent;