import { Page, expect } from "@playwright/test";
import { LoginInterface } from "../interfaces/loginInterface";
import { LoginPage } from "../pages/login/LoginPage";

export class LoginTasks {
    readonly loginData: LoginInterface;
    readonly loginPage: LoginPage;

    constructor(page: Page, loginData: LoginInterface) {
        this.loginData = loginData;
        this.loginPage = new LoginPage(page);
    }

    // async login() {
    //     await expect(this.loginPage.getLoginBtn()).toBeVisible();
    //     await this.loginPage.getLoginBtn().click();
    //     await expect(this.loginPage.getEmailTxt()).toBeVisible();
    //     await this.loginPage.getEmailTxt().fill(this.loginData.password);
    //     await this.loginPage.getPasswordTxt().fill(this.loginData.password);
    // }
}