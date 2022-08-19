import {Locator, Page} from '@playwright/test';

export class DemoBlazePage{
    readonly page: Page;
    readonly cartLocator: Locator;
    readonly loginLocator: Locator;
    readonly usernameFieldLocator: Locator;
    readonly passwordFieldLocator: Locator;
    readonly submitLoginLocator: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.cartLocator = page.locator('a',{hasText:'Cart'});
        this.loginLocator = page.locator('a',{hasText:'Log in'});
        this.usernameFieldLocator = page.locator('input[id="loginusername"]');
        this.passwordFieldLocator = page.locator('input[id="loginpassword"]');
        this.submitLoginLocator = page.locator('button', {hasText: 'Log in'});        
    }

    async goto(){
        await this.page.goto('https://www.demoblaze.com/');
    }

    async clickCart(){
        await this.cartLocator.first().click();
    }

    async clickLogin(){
        await this.loginLocator.first().click();
    }

    async fillLoginFormWithValidDetails(){
        await this.usernameFieldLocator.fill('sheila123');
        await this.passwordFieldLocator.fill('sheila123');
    }

    async clickSubmitLoginDetails(){
        await this.submitLoginLocator.first().click();
    }

    

}