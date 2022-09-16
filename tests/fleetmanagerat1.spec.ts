import { test, expect } from '@playwright/test';
import { FleetManagerAt1 } from './page-object-model/fleetmanagerat1-page';

test('FleetManagerAt1 has Login title', async({page}) => {
    const fleetManagerAt1Page = new FleetManagerAt1(page);
    await fleetManagerAt1Page.goto();
    await expect(page).toHaveTitle(/Login/);
})

test('FleetManagerAt1 logs in', async({page}) => {
    const fleetManagerAt1Page = new FleetManagerAt1(page);
    await fleetManagerAt1Page.goto();
    await fleetManagerAt1Page.fillLoginFormWithValidDetails();
    await fleetManagerAt1Page.clickSubmitLoginDetails();
    await expect(page).toHaveTitle(/Home/);
    await expect(page.locator('h1',{hasText:'Welcome'})).toHaveText('Welcome Sheila Coles');
})

test('FleetManagerAt1 emulates a user',async ({page}) => {
    const fleetManagerAt1Page = new FleetManagerAt1(page);
    await fleetManagerAt1Page.goto();
    await fleetManagerAt1Page.fillLoginFormWithValidDetails();
    await fleetManagerAt1Page.clickSubmitLoginDetails();
    await page.goto('https://adsat1.ukho.gov.uk/UserDetails/Edit?userId=49987');
    await fleetManagerAt1Page.clickEmulateThisUser();
    await expect(page.locator('h1',{hasText:'Welcome'})).toHaveText('Welcome Confidence TestSio');
})

test('FleetManagerAt1 has chart in basket',async ({page}) => {
    const fleetManagerAt1Page = new FleetManagerAt1(page);
    await fleetManagerAt1Page.goto();
    await fleetManagerAt1Page.fillLoginFormWithValidDetails();
    await fleetManagerAt1Page.clickSubmitLoginDetails();
    await page.goto('https://adsat1.ukho.gov.uk/UserDetails/Edit?userId=49987');
    await fleetManagerAt1Page.clickEmulateThisUser();
    await page.goto('https://adsat1.ukho.gov.uk/POD/PodPrintCharts');
    await fleetManagerAt1Page.clickAddMazuChart();
    await fleetManagerAt1Page.clickViewBasket();
    await expect(page).toHaveTitle(/Print on Demand Basket/);
    await expect(page.locator('#totalPrice')).toHaveText('£28.00');

    //await expect(page.locator('td[aria-describedby="print-chart-table_Title"]')).toHaveText('Mazus Map Of The Ocean');
    //await expect(page.locator("#chartRow150083")).toHaveText('Mazus Map Of The Ocean');
    //await expect(page.locator("#totalQuantity")).toHaveText('1');

})

