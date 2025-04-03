const {test,expect} = require('@playwright/test')

test("Verify Application Title", async ({page}) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").pressSequentially("Playwright", {delay: 200});

    await page.waitForSelector("//li[@role='presentation']");

    await page.keyboard.press("ArrowDown",{delay: 500});

    await page.keyboard.press("ArrowDown",{delay: 500});

    await page.keyboard.press("Enter",{delay: 500});
    
    await page.waitForTimeout(2000);


})

test.only("Verify Application Title Using Loop", async ({page}) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").pressSequentially("Mukesh Otwani", {delay: 200});

    await page.waitForSelector("//li[@role='presentation']");

    const element = await page.$$("//li[@role='presentation']");

    let isFound = false;
    let searchElement = "friendster";
    for(let i = 0; i<element.length;i++){
        const text = await element[i].textContent()
    

        if(text.includes(searchElement)){
            await element[i].click();
            isFound = true
            console.log(`Suggestion ${searchElement} element found`);
            break;
            
        }
        
    }if( isFound = false){
        console.log(`Suggestion ${searchElement} element found`);
    }


})