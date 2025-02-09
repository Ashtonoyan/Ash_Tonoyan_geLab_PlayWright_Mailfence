import {Page} from "playwright";


export class NavigationHelper {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async goToInbox(){
        await this.page.click('.icon24-Message.toolImg')
        await this.page.waitForTimeout(1000);
        await this.page.waitForURL('https://mailfence.com/flatx/index.jsp?v=2.8.028#tool=mail&folderoid=639842178')
    }

    async goToDocuments(){
        await this.page.click('.icon24-Documents.toolImg')
        await this.page.waitForTimeout(1000)

    }
    async goToTrash(){
        await this.page.locator('div.treeItemLabel:has-text("Trash")').click();
    }

    async goToTreeInbox(){
        await this.page.click('#treeInbox')
    }
}