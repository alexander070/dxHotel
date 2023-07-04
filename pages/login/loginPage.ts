import { Locator,Page, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly login: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginButton = page.locator('//div[@id="HeaderControl_Login_CD"]');
        this.email = page.locator('//input[@id="HeaderControl_LogonControl_LoginFormLayout_txtEmail_I"]');
        this.password = page.locator('//input[@id="HeaderControl_LogonControl_LoginFormLayout_txtPassword_I_CLND"]');
        this.login = page.locator('//div[@id="HeaderControl_LogonControl_btnLoginNow_CD"]');

    }

    async goToLogin(){
        await this.loginButton.click();
    }

    async typeEmail(email:string){
        await expect(this.email).toBeVisible();
        await this.email.fill(email);
    }

    async typePassword(password:string){
        await expect(this.password).toBeVisible();
        await this.password.fill(password);
    }

    async getLogin(){
        await this.login.click();
    }


}
