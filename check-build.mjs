import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

// Check build info from Vercel
await page.goto('https://bible-study-app-rose.vercel.app/_next/static/chunks/app/layout.js', { waitUntil: 'networkidle' });
const layoutContent = await page.content();
console.log('Layout chunk size:', layoutContent.length);

// Check the main page for any version info
await page.goto('https://bible-study-app-rose.vercel.app/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

// Look for build ID in script tags
const buildId = await page.$$eval('script[src*="_next"]', scripts => {
  const src = scripts[0]?.src || '';
  const match = src.match(/\/_next\/static\/([^/]+)\//);
  return match ? match[1] : 'unknown';
});
console.log('Build ID:', buildId);

// Check any meta tags
const metaTags = await page.$$eval('meta', metas => metas.map(m => ({ name: m.name, content: m.content?.substring(0, 50) })));
console.log('Meta tags:', metaTags.filter(m => m.name).slice(0, 5));

await browser.close();
