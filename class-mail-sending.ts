import {Page} from "playwright";


export class MailSending {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async letterCreate() {
        const test = await this.page.waitForSelector('#mailNewBtn', {state: 'visible'});
        if (test) {
            console.log("Is visible");
            await this.page.click('#mailNewBtn');
        } else {
            console.log("Is hidden");
        }
    }

    async fillFields() {
        await this.page.fill('input.GCSDBRWBPL[type="text"]', 'ashtonoyan@mailfence.com')
        await this.page.waitForTimeout(5000);

        const iframeElement = await this.page.waitForSelector('iframe.editable');


        const frame = await iframeElement.contentFrame();

        if (frame !== null) {
            await frame.fill('#gwt-uid-32', 'ashtonoyan@mailfence.com');
        } else {
            console.error('Не удалось получить доступ к содержимому iframe');
        }

    }

    async uploadDocument() {
        await this.page.click('a.GCSDBRWBISB.GCSDBRWBJSB')

        await this.page.waitForTimeout(2000);

        const element = await this.page.locator('span.GCSDBRWBGR >> text="С вашего компьютера"');
        await element.scrollIntoViewIfNeeded();


        const fileInput = await this.page.locator('input[type="file"]');

        await fileInput.setInputFiles('C:/Users/atv00/Downloads/Mailfence e2e UI test case - TestRail (1) (2).pdf');
        await this.page.waitForTimeout(1000);
    }

    async sendMail() {
        await this.page.click('#mailSend')

        await this.page.click('#dialBtn_YES')
    }
}