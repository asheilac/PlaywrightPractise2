import { Locator, Page } from '@playwright/test';

export class FleetManagerAt1{
    readonly page:Page;
    readonly submitLocator: Locator;
    readonly passwordFieldLocator: Locator;
    readonly usernameFieldLocator: Locator;
    readonly emulateUserLocator: Locator;
    readonly addMazuChartLocator: Locator;
    readonly viewBasketLocator: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameFieldLocator = page.locator('input[name="username"]');
        this.passwordFieldLocator = page.locator('input[name="password"]');
        this.submitLocator = page.locator('text=Submit');

        this.emulateUserLocator = page.locator('button', {hasText: 'Emulate This User'});        
        this.addMazuChartLocator = page.locator("#btnIncQty150083");
        this.viewBasketLocator = page.locator("#btnViewBasket");
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

    async clickEmulateThisUser(){
        await this.emulateUserLocator.first().click();
    }

    async clickAddMazuChart(){
        await this.addMazuChartLocator.first().click();
    }

    async clickViewBasket(){
        await this.viewBasketLocator.first().click();
    }
}