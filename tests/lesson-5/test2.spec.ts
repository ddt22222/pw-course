import { test } from '@playwright/test';

let product1 ='//div/button[@data-product-id="1"]';
let product2 ='//div/button[@data-product-id="2"]';
let product3 ='//div/button[@data-product-id="3"]';

test('Vào trang web và điền thông tin', async ({ page }) => {
    // Mở trang web
    await page.goto('https://material.playwrightvn.com/02-xpath-product-page.html');

    await page.locator(product1).click({clickCount: 2});
    await page.locator(product2).click({clickCount: 3});
    await page.locator(product3).click({clickCount: 1});
});