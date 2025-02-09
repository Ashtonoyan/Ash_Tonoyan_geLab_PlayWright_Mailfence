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
    //await page.waitForTimeout(5000);
    await page.click('input.btn[type="submit"]')
    console.log("Кнопка нажата")
    await page.waitForTimeout(5000);


    await page.click('.icon24-Message.toolImg')
    await page.waitForTimeout(1000);
    await page.waitForURL('https://mailfence.com/flatx/index.jsp?v=2.8.028#tool=mail&folderoid=639842178')


    const test = await page.waitForSelector('#mailNewBtn', { state: 'visible' });
    if (test) {
        console.log("Is visible");
        await page.click('#mailNewBtn');
    } else {
        console.log("Is hidden");
    }


    await page.fill('input.GCSDBRWBPL[type="text"]', 'ashtonoyan@mailfence.com')
    await page.waitForTimeout(5000);


    const iframeElement = await page.waitForSelector('iframe.editable');


    const frame = await iframeElement.contentFrame();

    await frame.fill('#gwt-uid-32', 'ashtonoyan@mailfence.com')



    await page.waitForTimeout(5000);


    await browser.close();
}) ();