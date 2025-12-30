import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('https://bible-study-app-rose.vercel.app/bible-study/genesis', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

// Find where "Chapters" appears
const chaptersLocations = await page.$$eval('*', els => {
  return els
    .filter(el => el.innerText && el.innerText.includes('Chapters') && el.children.length === 0)
    .map(el => ({ tag: el.tagName, text: el.innerText.substring(0, 100), classes: el.className }));
});
console.log('Elements with "Chapters":', JSON.stringify(chaptersLocations, null, 2));

// Get ALL buttons with their parent info  
const allButtons = await page.$$eval('button', btns => btns.map(b => ({
  text: b.innerText.trim(),
  classes: b.className,
  parent: b.parentElement?.className
})));
console.log('All buttons:', JSON.stringify(allButtons.slice(0, 10), null, 2));

await browser.close();
