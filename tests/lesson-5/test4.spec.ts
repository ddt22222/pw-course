import { test } from '@playwright/test';

let addText ='//div/input[@id="note-title"]';
let addContent ='//div/textarea[@id="note-content"]';
let addButton ='//div/button[@id="add-note"]';
let searchArea='//div/input[@id="search"]'
// test('Tạo Note', async ({ page }) => {
    
//     await page.goto('https://vnexpress.net/khoa-hoc');
//     let pageTitles: string[] = [];
    
//     for (let i=1; i<=3; i++){
//         let vnexpressTitle = `//h3/a[@data-medium="Item-${i}"]`;
//         let pageTitle = await page.locator(vnexpressTitle).innerText(); // Lấy nội dung tiêu đề
//         pageTitles.push(pageTitle); // Thêm tiêu đề vào mảng
//     }
//     console.log(pageTitles);
    
// });

 test('Tạo Note', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/04-xpath-personal-notes.html');
    
    for (let i=1; i<=10; i++){
        await page.locator(addText).fill(`Tiêu Đề ${i}`);
        await page.locator(addContent).fill(`Nội dung ${i}`);
        await page.locator(addButton).click();
    }

    await page.locator(searchArea).fill ('Tiêu đề 2');
    
}
)