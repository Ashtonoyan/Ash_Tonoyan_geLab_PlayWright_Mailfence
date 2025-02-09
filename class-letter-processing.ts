import {Page} from "playwright";



export class LetterProcessing{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async processLetter(){
        await this.page.waitForTimeout(3000); // Даем время на обновление страницы
        console.log("We are here")
       /* const messages = await this.page.$$('.listSubject');
        if (messages.length > 0) {
            await messages[0].click();
        } else {
            console.log("Сообщения не найдены");
        }*/

        const messages = await this.page.locator('div.listSubject:has-text("[Без темы]")');
        await messages.first().click();
        await this.page.waitForTimeout(3000);
        await this.page.click('a.GCSDBRWBJRB', {button: 'right'});
        await this.page.waitForTimeout(1000);
        await this.page.click('span.GCSDBRWBGR >> text="Сохранить в документах"');
        await this.page.waitForTimeout(1000);
        await this.page.click('div.treeItemLabel >> text="Мои документы"');
        await this.page.waitForTimeout(1000);
        await this.page.click('#dialBtn_OK')
        await this.page.waitForTimeout(1000);
    }
}