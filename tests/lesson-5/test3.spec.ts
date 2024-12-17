import { test } from '@playwright/test';

let inputText = '//div/input[@type="text"]';
let addTask = '//div/button[@id="add-task"]';



test('Tạo và xóa ToDo với Dialog', async ({ page }) => {
    // Mở trang web
    await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');

    // Tạo 5 nhiệm vụ
    for (let i = 1; i <= 100; i++) {
        await page.locator(inputText).fill(`Todo ${i}`);
        await page.locator(addTask).click();
    }

    //  dialog trước khi xóa
    page.on('dialog', async (dialog) => {
        console.log(dialog.message()); // In ra thông báo của hộp thoại
        await dialog.accept(); // Chấp nhận hành động xóa
    });

    // Xóa các nhiệm vụ có chỉ số lẻ
    for (let j = 1; j < 100; j++) {
        if (j % 2 == 1) {
            let deleteTask =`//div/button[@id="todo-${j}-delete"]`;
            await page.locator(deleteTask).click(); // Click nút xóa
        }
    }
});