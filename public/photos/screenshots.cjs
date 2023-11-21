const puppeteer = require('puppeteer');
const fs = require('fs');

// Function to take screenshots
async function takeScreenshots(urls) {
  const browser = await puppeteer.launch();

  for (let i = 0; i < urls.length; i++) {
    const page = await browser.newPage();
    await page.goto(urls[i], { timeout: 60000 }); // Adjust the timeout value as needed
    await page.screenshot({ path: `screenshot_${i + 1}.png` });
  }

  await browser.close();
}

// Array of website URLs
const websites = [
    // "https://hamoz07.github.io/calc-Liter-Per-Hour",
    // "https://hamoz07.github.io/canvas_project",
    // "https://hamoz07.github.io/car-rental",
    
    // "https://hamoz07.github.io/scroll-prog/",
    // "https://hamoz07.github.io/scroll-to-top/",
    // "https://hamoz07.github.io/serial_num-generator/",
    // "https://hamoz07.github.io/show-users-posts-challenge/",
    // "https://hamoz07.github.io/simple-counter/",
    // "https://hamoz07.github.io/simple-navbar/",
    // "https://hamoz07.github.io/simple-password-validation/",
    // "https://hamoz07.github.io/template-2/",
    // "https://hamoz07.github.io/Template-3/",
    // "https://hamoz07.github.io/template-4/",
    // "https://hamoz07.github.io/To-do-list-manager/",
    // "https://hamoz07.github.io/translator/",
    // "https://hamoz07.github.io/type-a-head/",
    // "https://hamoz07.github.io/typewriter-effect/",
    // "https://hamoz07.github.io/Typing-speed-game/",
    // "https://hamoz07.github.io/work-filter/",


];

takeScreenshots(websites)
  .then(() => console.log('Screenshots taken successfully!'))
  .catch((err) => console.error('Error taking screenshots:', err));
