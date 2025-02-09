import {chromium} from "playwright";

(async () => {

    const browser = await chromium.launch({headless: false});
    console.log("Начали")
    const page = await browser.newPage();

    await page.goto('https://mailfence.com/')

    await page.click('#signin')

    console.log("Нажали на селектор")

    await page.waitForURL('https://mailfence.com/sw?type=L&state=0&lf=mailfence')

    await page.waitForTimeout(1000);

    await page.fill('#UserID', 'ashtonoyan@mailfence.com')
    await page.fill('#Password', '123456789.Ash')
    await page.waitForTimeout(5000);
    await page.click('input.btn[type="submit"]')
    await page.waitForTimeout(5000);
    await page.waitForURL('https://mailfence.com/flatx/index.jsp?v=2.8.028#home')


    await browser.close();
}) ();