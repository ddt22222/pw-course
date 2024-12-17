import { test } from '@playwright/test';

let usernameInput = '//input[@id="username"]';
let emailInput = '//input[@id="email"]';
let gender ='//div/input[@type="radio" and @id ="male"]';
let readingHobby = '//input[@id="reading"]';
let travelingHobby = '//input[@id="traveling"]';
let Interest ='//div/select[@id="interests"]';
let Country ='//div/select[@id="country"]';
let Datepicker ='//div/input[@type="date"]'
let UploadFile ='//div/input[@type="file"]';
let InputBiography ='//div/textarea[@id="bio"]';
let Slider ='//div/input[@type="range"]';
let FavColor ='//div/input[@id="favcolor"]'
let NewsletterHover ='//div[@class="tooltip"]';
let checkFeature ='//div/label/span[@class="slider round"]';
let registerButton = '//div/button[@type="submit"]';

test('Vào trang web và điền thông tin', async ({ page }) => {
    // Mở trang web
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

    // Điền thông tin vào ô username và email
    await page.locator(`xpath=${usernameInput}`).fill('QuocDuc');
    await page.locator(`xpath=${emailInput}`).fill('ng.qc.duc@gmail.com');
    await page.locator(`xpath=${gender}`).check();
    await page.locator(`xpath=${readingHobby}`).check();
    await page.locator(`xpath=${travelingHobby}`).check();
    await page.locator(`xpath=${Interest}`).waitFor(); // Đợi phần tử xuất hiện
    await page.locator(`xpath=${Interest}`).selectOption({label:'Art' }); // Chọn Art
    await page.locator(`xpath=${Country}`).selectOption({value:'canada' }); 
    await page.locator(`xpath=${Datepicker}`).fill('1993-09-07'); 
    // await page.locator(`xpath=${UploadFile}`).setInputFiles('tests/lesson-5/aa.bmp'); 
    await page.locator(`xpath=${InputBiography}`).fill('HelloWorld'); 
    //Cách 1 : 
    //await page.locator(`xpath=${Slider}`).fill('7'); //Set giá trị cho Slider =7
    //Cách 2
    await page.locator(`xpath=${Slider}`).click(); 
    for (let i=0 ; i < 2; i++){
        await page.keyboard.press('ArrowRight'); // Set gia  tri cho Slider =7 bang cach bam arrow 2 lan
    }
    await page.locator(`xpath=${FavColor}`).fill('#923a3a');
    await page.locator(`xpath=${NewsletterHover}`).hover();
    await page.locator(`xpath=${checkFeature}`).click();
    await page.locator(`xpath=${registerButton}`).click();
});