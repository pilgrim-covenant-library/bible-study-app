import { chromium } from 'playwright';

const browser = await chromium.launch({ 
  headless: false,  // Show browser so user can see/help if needed
  slowMo: 500       // Slow down so we can see what's happening
});

const context = await browser.newContext({
  // Try to use existing browser session
  storageState: undefined
});

const page = await context.newPage();

console.log('Navigating to Vercel dashboard...');
await page.goto('https://vercel.com/dashboard', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

// Check if logged in
const url = page.url();
console.log('Current URL:', url);

if (url.includes('login')) {
  console.log('NOT LOGGED IN - Please log in manually in the browser window');
  console.log('Waiting 60 seconds for you to log in...');
  await page.waitForTimeout(60000);
}

// Look for bible-study-app project
console.log('Looking for bible-study-app project...');
const projectLink = await page.locator('a:has-text("bible-study-app")').first();
if (await projectLink.isVisible()) {
  console.log('Found project, clicking...');
  await projectLink.click();
  await page.waitForTimeout(3000);
} else {
  console.log('Project not found on dashboard, trying direct URL...');
  await page.goto('https://vercel.com/jonathanhwqs-projects/bible-study-app', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
}

// Click Deployments tab
console.log('Looking for Deployments tab...');
const deploymentsTab = await page.locator('a:has-text("Deployments"), button:has-text("Deployments")').first();
if (await deploymentsTab.isVisible()) {
  await deploymentsTab.click();
  await page.waitForTimeout(2000);
}

// Find the three-dots menu on first deployment
console.log('Looking for deployment menu...');
await page.screenshot({ path: '/tmp/vercel-dashboard.png' });
console.log('Screenshot saved to /tmp/vercel-dashboard.png');

// Keep browser open for user
console.log('Browser is open. Complete the redeploy manually if needed.');
console.log('Press Ctrl+C to close when done.');

// Wait for a long time so user can interact
await page.waitForTimeout(120000);

await browser.close();
