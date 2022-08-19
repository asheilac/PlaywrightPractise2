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
    await expect(page.locator('h1',{hasText:'Welcome'})).toHaveText('Welcome Sheila Coles');
})

