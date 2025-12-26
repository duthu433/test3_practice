import { expect, Locator, Page } from "@playwright/test";
import path from "path";

export class ContactUsScreen{
    readonly page:Page
    readonly contactUsBtn="//a[text()=' Contact us']"
    readonly InTouchTxt="//h2[text()='Get In Touch'] "
    readonly nameTxtBox="[name='name']"
    readonly emailTxtBox="[name='email']"
    readonly subjectTxtBx="[name='subject']"
    readonly msgtxtbox="#message"
    readonly submitBtn="[name='submit']"
    readonly successmsg="[class='status alert alert-success']"
    readonly homebtn="//span[text()=' Home']"

    constructor(page:Page){
        this.page=page
    }
    getcontactUsBtn():Locator{
        return this.page.locator(this.contactUsBtn)
    }
    getInTouchTxt():Locator{
        return this.page.locator(this.InTouchTxt)
    }
    getnameTxtBox():Locator{
        return this.page.locator(this.nameTxtBox)
    }
    getemailTxtBox():Locator{
        return this.page.locator(this.emailTxtBox)
    }
    getsubTxtBox():Locator{
        return this.page.locator(this.subjectTxtBx)
    }
    getmsgTxtBox():Locator{
        return this.page.locator(this.msgtxtbox)
    }
    getsubmitBtn():Locator{
        return this.page.locator(this.submitBtn)
    }
    getsuccessmsgtxt():Locator{
        return this.page.locator(this.successmsg)
    }
    gethomeTxtBtn():Locator{
        return this.page.locator(this.homebtn)
    }

    async contactusFunctionality(name:string,email:string,subject:string,message:string){
    expect(await this.page.title()).toContain('Automation Exercise')
      await this.getcontactUsBtn().click()
      expect(await this.getInTouchTxt()).toBeVisible({timeout:5000})
      await this.getnameTxtBox().fill(name)
      await this.getemailTxtBox().fill(email)
      await this.getsubTxtBox().fill(subject)
      await this.getmsgTxtBox().fill(message)
      await this.page.setInputFiles("[name='upload_file']",path.join(process.cwd(),"sensitivedatafile","Document-1.rtf"))
      this.page.on('dialog',async(dialog)=>{
      dialog.accept()})
      await this.getsubmitBtn().click()
      expect(await this.getsuccessmsgtxt()).toBeVisible({timeout:5000})
      await this.gethomeTxtBtn().click()
      expect(await this.page.title()).toContain('Automation Exercise')
    }
}