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


    await page.click('a.GCSDBRWBISB.GCSDBRWBJSB')

    await page.waitForTimeout(2000);

    const element = await page.locator('span.GCSDBRWBGR >> text="С вашего компьютера"');
    await element.scrollIntoViewIfNeeded();
    //await element.click({ force: true });

    const fileInput = await page.locator('input[type="file"]');

    await fileInput.setInputFiles('C:/Users/atv00/Downloads/Mailfence e2e UI test case - TestRail (1) (2).pdf');
    await page.waitForTimeout(5000);
    await page.click('#mailSend')

    await page.click('#dialBtn_YES')

    await page.waitForTimeout(10000);

    await page.click('#treeInbox')

    await page.waitForTimeout(10000);

    const messages = await page.$$('.listSubject');
    await messages[0].click();

    await page.waitForTimeout(5000);
    await page.click('a.GCSDBRWBJRB', { button: 'right' });
    await page.waitForTimeout(5000);
    await page.click('span.GCSDBRWBGR >> text="Сохранить в документах"');
    await page.waitForTimeout(5000);
    await page.click('div.treeItemLabel >> text="Мои документы"');
    await page.waitForTimeout(2000);
    await page.click('#dialBtn_OK')
    await page.waitForTimeout(5000);
    await page.click('.icon24-Documents.toolImg')
    await page.waitForTimeout(5000);

    await browser.close();
}) ();