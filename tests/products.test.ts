import { test } from '@playwright/test';
import ProductsPage from '../pages/peoducts.page';

test.beforeEach(async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.open();
});

test.describe('Products page tests @smoke ->', () => {
    test('Search product', async ({ page }) => {
        const productsPage = new ProductsPage(page);

        await productsPage.searchProduct('Product 2');
        await productsPage.assertTableSize(6);
    });
});