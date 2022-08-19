import { Locator, Page } from '@playwright/test';

export class FleetManagerAt1{
    readonly page:Page;
    readonly submitLocator: Locator;
    readonly passwordFieldLocator: Locator;
    readonly usernameFieldLocator: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameFieldLocator = page.locator('input[name="username"]');
        this.passwordFieldLocator = page.locator('input[name="password"]');
        this.submitLocator = page.locator('text=Submit');
    }

    async goto(){
        await this.page.goto('https://adsat1.ukho.gov.uk/Login');
    }

    async fillLoginFormWithValidDetails(){
        await this.usernameFieldLocator.fill('');
        await this.passwordFieldLocator.fill('');
    }

    async clickSubmitLoginDetails(){
        await this.submitLocator.first().click();
    }
}