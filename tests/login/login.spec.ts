import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/login/LoginPage";
import { LoginInterface } from "../../interfaces/loginInterface";

test.beforeEach(async ({ page }) => {
    await page.goto('https://demos.devexpress.com/rwa/dxhotels/');
});

test.describe('Login in to DxHotel', () => {
    const loginData: LoginInterface = {
        email: 'oscaralexanderblanco@gmail.com',
        password:'123456'
    }
    test('user login error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLogin();
        await loginPage.typeEmail(loginData.email);
        await loginPage.typePassword(loginData.password);
        await loginPage.getLogin();
        await expect(page.getByText('The submitted code is incorrect')).toBeVisible();
        await page.getByText('The submitted code is incorrect').screenshot({ path: 'screenshot.png' });

    });
});

test.describe('reserve hotel', ()=>{
    test('reserve hotel in DxHotel', async ({ page })=>{

    });

});

