import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

// Disable cache
await page.route('**/*', route => route.continue());

console.log('Checking local version...');
await page.goto('http://localhost:3000/bible-study/genesis', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
const localButtons = await page.$$eval('button', btns => btns.map(b => b.textContent?.trim()).filter(t => t));
console.log('LOCAL buttons:', localButtons.filter(b => ['Overview','Outline','Chapters','Themes','Christ','Study'].includes(b)));

console.log('\nChecking Vercel version...');
// Clear cookies and cache
await page.context().clearCookies();
await page.goto('https://bible-study-app-rose.vercel.app/bible-study/genesis', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
const vercelButtons = await page.$$eval('button', btns => btns.map(b => b.textContent?.trim()).filter(t => t));
console.log('VERCEL buttons:', vercelButtons.filter(b => ['Overview','Outline','Chapters','Themes','Christ','Study'].includes(b)));

await browser.close();
