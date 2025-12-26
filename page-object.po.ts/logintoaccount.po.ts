import { expect, Locator, Page } from "@playwright/test";

export class LoginToAccount{
    readonly page:Page;
    readonly email="[name='email']"
    readonly password="[name='password']"
    readonly loginbtn="//button[text()='Login']"
    readonly logintouraccount="//h2[text()='Login to your account']"
    readonly loginerror="//p[text()='Your email or password is incorrect!']"
    constructor(page:Page){
        this.page=page
    }

    getEmailTxtBox():Locator{
        return this.page.locator(this.email)
    }
    getPwdTxtBox():Locator{
        return this.page.locator(this.password)
    }

    getLoginBtn():Locator{
        return this.page.locator(this.loginbtn)
    }

    getLoginToUrAccount():Locator{
        return this.page.locator(this.logintouraccount)
    }
    getLoginErrormsg():Locator{
        return this.page.locator(this.loginerror)
    }

    async loginToUrAccountFuctionality(name:string){
    expect(await this.getLoginToUrAccount()).toBeVisible({ timeout: 5000 })
    await this.getEmailTxtBox().nth(0).fill(`${name}@gmail.com`)
    await this.getPwdTxtBox().fill('duthu')
    await this.getLoginBtn().click()
    }
    
  
}