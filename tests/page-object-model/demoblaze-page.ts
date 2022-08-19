import {Locator, Page} from '@playwright/test';

export class DemoBlazePage{
    readonly page: Page;
    readonly cartLink: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.cartLink = page.locator('a',{hasText:'Cart'});
    }

    async goto(){
        await this.page.goto('https://www.demoblaze.com/');
    }

    async clickCart(){
        await this.cartLink.first().click();
    }
}