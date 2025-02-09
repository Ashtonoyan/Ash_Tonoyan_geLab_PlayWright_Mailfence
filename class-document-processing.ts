import {Page} from "playwright";


export class DocumentProcessing {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async processDocument() {
        await this.page.click('.GCSDBRWBPJB')
        await this.page.waitForTimeout(1000)

        await this.page.waitForTimeout(1000)

        await this.page.click('div.tbBtnText >> text="Переместить"');


        await this.page.locator('div.GCSDBRWBED.GCSDBRWBO').evaluate(el => {
            el.style.display = 'block';
        });

        await this.page.waitForTimeout(5000)
        await this.page.evaluate(() => {
            const overlay = document.querySelector('.GCSDBRWBED.GCSDBRWBO');
            if (overlay) {
                overlay.remove();  // Remove the overlay from the DOM
            }
        });

        await this.page.locator('div.treeItemLabel:has-text("Trash")').nth(1).click();


        await this.page.waitForTimeout(1000)
        await this.page.locator('div.btnCtn div:has-text("Переместить")').click();
        await this.page.waitForTimeout(1000)
        await this.page.locator('div.btnCtn div:has-text("Да")').click();
    }
}