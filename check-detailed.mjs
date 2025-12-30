import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

console.log('Checking Vercel deployment...');
await page.goto('https://bible-study-app-rose.vercel.app/bible-study/genesis', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

// Get all visible text in header area
const headerText = await page.$eval('header', el => el.innerText);
console.log('Header content:', headerText);

// Take screenshot
await page.screenshot({ path: '/tmp/vercel-check.png', fullPage: false });
console.log('Screenshot saved to /tmp/vercel-check.png');

// Check page source for "Chapters"
const pageContent = await page.content();
const hasChapters = pageContent.includes('Chapters');
console.log('Page contains "Chapters":', hasChapters);

// Look for the TABS constant in bundled JS
const scripts = await page.$$eval('script', scripts => scripts.map(s => s.src).filter(s => s));
console.log('Scripts loaded:', scripts.length);

await browser.close();
