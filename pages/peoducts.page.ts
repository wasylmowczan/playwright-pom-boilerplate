import { expect, Page } from '@playwright/test';
import BasePage from './base.page';
import { CREDENTIALS } from '../shared/config/credentials.config';
import HeaderComponent from '../components/header.component';

class ProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = `${CREDENTIALS.url}`;
    this.components = {
      header: new HeaderComponent(page),
    };
    this.elements = {
      searchInput: 'input.filter-textbox',
      filterButton: '[data-testid="filter-button"]',
      tableRows: 'table tbody tr',
    };
  }

  async searchProduct(productName: string) {
    await this.page.fill(this.elements.searchInput, productName);
    await this.page.click(this.elements.filterButton);
  }

  async assertTableSize(size: number) {
    await this.shouldHaveSize(this.elements.tableRows, size);
  }
}

export default ProductsPage;    