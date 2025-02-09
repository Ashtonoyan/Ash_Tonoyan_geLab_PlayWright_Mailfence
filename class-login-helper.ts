import {Page} from "playwright";


export class LoginHelper{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.fill('#UserID', username);
        await this.page.fill('#Password', password);
        await this.page.click('input.btn[type="submit"]');
    }

    async waitForLoginPage() {
        await this.page.waitForURL('https://mailfence.com/sw?type=L&state=0&lf=mailfence');
    }
}