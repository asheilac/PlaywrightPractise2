import {test, expect} from '@playwright/test';
import { DemoBlazePage } from './page-object-model/demoblaze-page';

test('DemoBlaze homepage has cart',async ({page}) => {
   
    const demoBlazePage = new DemoBlazePage(page);
    await demoBlazePage.goto();
    await demoBlazePage.clickCart();
    await expect(page).toHaveURL(/.*cart.html/); 
  });
