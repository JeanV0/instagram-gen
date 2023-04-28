import { time } from "console";
import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
  
    await page.goto('https://proton.me/mail/pricing');
  
    // Set screen size
    await page.setViewport({width: 1080, height: 1024});
    
    await page.waitForSelector('#detailed-pricing div:nth-child(1) div:nth-child(2) div:nth-child(1) a div:nth-child(1)');
    await page.click('#detailed-pricing div:nth-child(1) div:nth-child(2) div:nth-child(1) a div:nth-child(1)');

    await page.waitForSelector('[id="email"]')
    await page.waitForSelector('[id="password"]')
    await page.waitForSelector('[id="repeat-password"]')

    await setTimeout(async () => {
      console.log("BATCHE")
    }, 3000);

    browser.close()
  })();