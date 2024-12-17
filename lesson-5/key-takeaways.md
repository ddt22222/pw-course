### Khái niệm cơ bản

DOM: Document Object Model

Node: các nhánh con có trong DOM 
ví dụ <html> là thẻ cha và các node có thể có là <head> <tittle>.... nằm trong <html>

Các thẻ sử dụng trong DOM có cấu tạo là thẻ đóng , thẻ mở, thẻ tự đóng
Ví dụ thẻ Mở <option> .... Thẻ đóng</option>
Thẻ tự đóng <img>

## Selector
Cách chọn phần tử trên trang
Có nhiều cách chọn phần tử:
○ XPath selector
○ CSS selector
○ Playwright selector

  1. Xpath Selector
  Xpath =XML Path
  Xpath Tương đối bắt đầu với / và đi dọc cây DOM
  Xpath Tuyệt đối bắt đầu với // ví dụ: //tenthe[@thuoctinh="giatri"]
## Test basic syntax
```Tạo test
import { test } from '@playwright/test';
test('<tên test>', async ({ page }) => {
// Code của test
});
```
```Test step
await test.step('Tên step', async () => {
// Code here
});
```
## Có rất nhiều cú pháp trong playwright
Tham khảo: https://playwright.dev/docs/intro