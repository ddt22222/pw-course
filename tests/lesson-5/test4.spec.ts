import { test } from '@playwright/test';
import * as ExcelJS from 'exceljs';

let addText ='//div/input[@id="note-title"]';
let addContent ='//div/textarea[@id="note-content"]';
let addButton ='//div/button[@id="add-note"]';
let searchArea='//div/input[@id="search"]';

test('Tạo Note', async ({ page }) => {
    await page.goto('https://vnexpress.net/khoa-hoc');

    let pageTitles: string[] = [];

    for (let i = 1; i <= 10; i++) {
        let vnexpressTitle: any;
        if (i == 1){
        vnexpressTitle = `//h3/a[@data-medium="Item-${i}"]`; // Lấy Xpath thằng đầu tiên của Vnexpress để trong h3
        }
        else if(i>=2 && i<=4){
        vnexpressTitle = `//h4/a[@data-medium="Item-${i}"]`;// thằng 2~4 nó lại để ở h4
        }
        else if(i>=5){
        vnexpressTitle = `//h3/a[@data-medium="Item-${i}"]`;// Xong thằng 5 trở đi nó lại để ở h3....
        }
        // Chờ phần tử xuất hiện trước khi lấy nội dung
        let pageTitle = await page.locator(vnexpressTitle).innerText();
        console.log(`Lấy được tiêu đề ${i}: ${pageTitle}`);
        pageTitles.push(pageTitle);
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('VnExpress Titles');

    // Ghi dữ liệu vào sheet
    sheet.columns = [
        { header: 'STT', key: 'stt', width: 10 },
        { header: 'Tiêu đề', key: 'title', width: 100 },
    ];

    pageTitles.forEach((title, index) => {
        sheet.addRow({ stt: index + 1, title: title });
    });

    // Lưu file Excel
    const filePath = './vnexpress_titles.xlsx';
    await workbook.xlsx.writeFile(filePath);

    console.log(`Dữ liệu đã được lưu vào file Excel tại: ${filePath}`);
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