import { test, expect } from '@playwright/test';
import { DemoBlazePage } from './page-object-model/demoblaze-page';

test('DemoBlaze homepage has cart', async ({page}) => {   
    const demoBlazePage = new DemoBlazePage(page);
    await demoBlazePage.goto();
    await demoBlazePage.clickCart();
    await expect(page).toHaveURL(/.*cart.html/); 
});

test('DemoBlaze logs in', async({page}) => {
    const demoBlazePage = new DemoBlazePage(page);
    await demoBlazePage.goto();
    await demoBlazePage.clickLogin();
    await demoBlazePage.fillLoginFormWithValidDetails();
    await demoBlazePage.clickSubmitLoginDetails();
    await expect(page.locator('a',{hasText:'Welcome'})).toHaveText('Welcome sheila123');
})
