const {test,expect} = require('@playwright/test')

test("Verify upload", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./upload/RDR2.PNG");

    await page.waitForTimeout(2000);

    await page.locator("#file-submit").click();

    expect(await page.locator("//h3")).toHaveText("File Uploaded!");

    await page.waitForTimeout(2000);
})