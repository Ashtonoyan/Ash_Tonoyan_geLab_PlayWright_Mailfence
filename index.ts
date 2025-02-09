import {chromium} from "playwright"
import {LoginHelper} from "./class-login-helper";
import {NavigationHelper} from "./class-navigation-helper";
import {MailSending} from "./class-mail-sending";
import {LetterProcessing} from "./class-letter-processing";
import {DocumentProcessing} from "./class-document-processing";

(async () => {

    const browser = await chromium.launch({headless: false});
    console.log("Начали")
    const page = await browser.newPage();

    const loginHelper = new LoginHelper(page);
    const navigationHelper = new NavigationHelper(page);
    const mailsending = new MailSending(page)
    const letterProcess = new LetterProcessing(page);
    const documentProcess = new DocumentProcessing(page);


    await page.goto('https://mailfence.com/')

    await page.click('#signin')

    console.log("Нажали на селектор")

    await page.waitForURL('https://mailfence.com/sw?type=L&state=0&lf=mailfence')
    await loginHelper.waitForLoginPage()

    await page.waitForTimeout(1000);


    //await page.waitForTimeout(5000);
    await loginHelper.login('ashtonoyan@mailfence.com', '123456789.Ash')
    console.log("Кнопка нажата")
    await page.waitForTimeout(5000);

    await navigationHelper.goToInbox()

    await mailsending.letterCreate()

    await mailsending.fillFields()

    await mailsending.uploadDocument()

    await mailsending.sendMail()

    await page.waitForTimeout(10000);

    await navigationHelper.goToTreeInbox()

    await page.waitForTimeout(10000);


    await letterProcess.processLetter()

    await navigationHelper.goToDocuments()

    await documentProcess.processDocument()
    await page.waitForTimeout(5000)
    await navigationHelper.goToTrash()

    await page.waitForTimeout(5000)

    await browser.close();
})();