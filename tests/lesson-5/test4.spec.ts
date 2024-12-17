import { test } from '@playwright/test';

let addText ='//div/input[@id="note-title"]';
let addContent ='//div/textarea[@id="note-content"]';
let addButton ='//div/button[@id="add-note"]';
let searchArea='//div/input[@id="search"]';

test('Tạo Note', async ({ page }) => {
    await page.goto('https://vnexpress.net/khoa-hoc');

    let pageTitles: string[] = [];

    for (let i = 1; i <= 10; i++) {
        let vnexpressTitle;
        if (i == 1){
        vnexpressTitle = `//h3/a[@data-medium="Item-${i}"]`;
        }
        else if(i>=2 && i<=4){
        vnexpressTitle = `//h4/a[@data-medium="Item-${i}"]`;
        }
        else if(i>=5){
        vnexpressTitle = `//h3/a[@data-medium="Item-${i}"]`;
        }
        // Chờ phần tử xuất hiện trước khi lấy nội dung
        let pageTitle = await page.locator(vnexpressTitle).innerText();
        console.log(`Lấy được tiêu đề ${i}: ${pageTitle}`);
        pageTitles.push(pageTitle);
    }

    await page.goto('https://material.playwrightvn.com/04-xpath-personal-notes.html');
    
    for (let i=0; i<10; i++){
        await page.locator(addText).fill(`${pageTitles[i]}`);
        await page.locator(addContent).fill(`Nội dung ${i}`);
        await page.locator(addButton).click();
    }

    await page.locator(searchArea).fill ('Rồng đất');
});
//  test('Tạo Note', async ({ page }) => {
//     await page.goto('https://material.playwrightvn.com/04-xpath-personal-notes.html');
    
//     for (let i=1; i<=10; i++){
//         await page.locator(addText).fill(`Tiêu Đề ${i}`);
//         await page.locator(addContent).fill(`Nội dung ${i}`);
//         await page.locator(addButton).click();
//     }

//     await page.locator(searchArea).fill ('Tiêu đề 2');
    
// }
// )