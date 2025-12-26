import { expect, Locator, Page } from "@playwright/test"

export class EnterAccountInfo{
    readonly page:Page
    readonly enterActInfo="//b[text()='Enter Account Information']"
    readonly nametxtbox="//input[@name='name']"
    readonly emailtxtbox="//input[@name='email']"
    readonly genderradiobtn='//input[@value="Mrs"]'
    readonly pwdtxtbox="#password"
    readonly daysselector='#days'
    readonly monthselector='#months'
    readonly yearselector='#years'
    readonly newsletterchckbox='#newsletter'
    readonly optinchckox='#optin'
    readonly firstnametxtbox="#first_name"
    readonly lastnametxtbox="#last_name"
    readonly companytxtbox="#company"
    readonly address1="#address1"
    readonly countrytxtbox="#country"
    readonly statetxtbox="#state"
    readonly citytxtbox="#city"
    readonly zipcodetxtbox="#zipcode"
    readonly mobnumtxtbox="#mobile_number"
    readonly createacctbtn="//button[text()='Create Account']"
    readonly acctcreatedtxt="//b[text()='Account Created!']"
    readonly continuebtn="//a[text()='Continue']"
    //readonly loggedinastext=`//b[text()='${name}']//ancestor::a`
    readonly delecteacctlink="//a[text()=' Delete Account']"
    readonly acctdelectedtxt="//b[text()='Account Deleted!']"
    readonly logoutlink="//a[text()=' Logout']"

    constructor(page:Page){
      this.page=page
    }
    getenterActInfotxt():Locator{
      return this.page.locator(this.enterActInfo)
    }
    getnameTxtBox():Locator{
      return this.page.locator(this.nametxtbox)
    }
    getemailTxtBox():Locator{
      return this.page.locator(this.emailtxtbox)
    }
    getgenderRadioBtn():Locator{
      return this.page.locator(this.genderradiobtn)
    }
    getpwdtxtBox():Locator{
      return this.page.locator(this.pwdtxtbox)
    }
    getdaysselector():Locator{
      return this.page.locator(this.daysselector)
    }
    getmonthselector():Locator{
      return this.page.locator(this.monthselector)
    }
    getyearselector():Locator{
      return this.page.locator(this.yearselector)
    }
    getnewsletterchkbox():Locator{
      return this.page.locator(this.newsletterchckbox)
    }
    getoptinchckbox():Locator{
      return this.page.locator(this.optinchckox)
    }
    getfirstnametxtbox():Locator{
      return this.page.locator(this.firstnametxtbox)
    }
    getlastnametxtbox():Locator{
      return this.page.locator(this.lastnametxtbox)
    }
    getcompanytxtbox():Locator{
      return this.page.locator(this.companytxtbox)
    }
    getaddresstxtbox():Locator{
      return this.page.locator(this.address1)
    }
    getcountrytxtbox():Locator{
      return this.page.locator(this.countrytxtbox)
    }
    getstatetxtbox():Locator{
      return this.page.locator(this.statetxtbox)
    }
    getcitytxtbox():Locator{
      return this.page.locator(this.citytxtbox)
    }
    getzipcodetxtbox():Locator{
      return this.page.locator(this.zipcodetxtbox)
    }
    getmobilenumbtxtbox():Locator{
      return this.page.locator(this.mobnumtxtbox)
    }
    getcreateacctbtn():Locator{
      return this.page.locator(this.createacctbtn)
    }
    getacctcreatedtxt():Locator{
      return this.page.locator(this.acctcreatedtxt)
    }
    getcontinuebtn():Locator{
      return this.page.locator(this.continuebtn)
    }
    getloggedinastxt(name:string):Locator{
      return this.page.locator(`//b[text()='${name}']//ancestor::a`)
    }
    getDeleteAcctlink():Locator{
      return this.page.locator(this.delecteacctlink)
    }
    getAcctDeletedTxt():Locator{
      return this.page.locator(this.acctdelectedtxt)
    }
    getLogoutlink():Locator{
      return this.page.locator(this.logoutlink)
    }

  async enteractinfofunctionality(name:string,pwd:string,day:string,month:string,year:string){
  expect(await this.getenterActInfotxt()).toBeVisible({ timeout: 5000 })
  expect(await this.getnameTxtBox().getAttribute("value", { timeout: 5000 })).toEqual(name)
  expect(await this.getemailTxtBox().getAttribute("value", { timeout: 5000 })).toEqual(`${name}@gmail.com`)
  await this.getgenderRadioBtn().click()
  await this.getpwdtxtBox().fill(pwd)
  await this.getdaysselector().selectOption({ value: day})
  await this.getmonthselector().selectOption({ label: month})
  await this.getyearselector().selectOption({ value: year})
  await this.getnewsletterchkbox().check()
  expect(this.getnewsletterchkbox()).toBeChecked({ timeout: 5000 })
  await this.getoptinchckbox().check()
  }
   async enteradressfuntionality(name:string,fname:string,lname:string,cmpname:string,adress:string,country:string,state:string,city:string,zipcode:string,mobnum:string){
  await this.getfirstnametxtbox().fill(fname)
  await this.getlastnametxtbox().fill(lname)
  await this.getcompanytxtbox().fill(cmpname)
  await this.getaddresstxtbox().fill(adress)
  await this.getcountrytxtbox().selectOption({ value: country})
  await this.getstatetxtbox().fill(state)
  await this.getcitytxtbox().fill(city)
  await this.getzipcodetxtbox().fill(zipcode)
  await this.getmobilenumbtxtbox().fill(mobnum)
  await this.getcreateacctbtn().click()
  expect(this.getacctcreatedtxt()).toBeVisible({ timeout: 5000 })
  await this.getcontinuebtn().click()
  expect((await this.getloggedinastxt(name).innerText()).trim()).toEqual(`Logged in as ${name}`)
  await this.getDeleteAcctlink().click()
  expect(this.getAcctDeletedTxt()).toBeVisible({timeout:5000})
  await this.getcontinuebtn().click()

}
}