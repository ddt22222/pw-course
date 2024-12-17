import { test } from '@playwright/test';

test('Vào trang web và điền thông tin', async ({ page }) => {
    // Mở trang web
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
});