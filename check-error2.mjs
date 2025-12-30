import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

// Go directly to a deployment URL based on the screenshot
await page.goto('https://vercel.com/pilgrim-covenant-librarys-projects/bible-study-app', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

// If login needed, wait
if (page.url().includes('login')) {
  console.log('Please log in...');
  for (let i = 0; i < 60; i++) {
    await page.waitForTimeout(2000);
    if (!page.url().includes('login')) break;
  }
}

// Go to deployments
await page.goto('https://vercel.com/pilgrim-covenant-librarys-projects/bible-study-app/deployments', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

// Click on the first row which should be a link
console.log('Looking for deployment links...');
const deploymentLinks = await page.$$('a[href*="/deployments/"]');
console.log('Found', deploymentLinks.length, 'deployment links');

if (deploymentLinks.length > 0) {
  await deploymentLinks[0].click();
  await page.waitForTimeout(3000);
  console.log('Opened deployment:', page.url());
  await page.screenshot({ path: '/tmp/vercel-deployment.png', fullPage: true });
}

await page.waitForTimeout(5000);
await browser.close();
