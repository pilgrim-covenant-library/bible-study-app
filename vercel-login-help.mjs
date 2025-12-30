import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false, slowMo: 100 });
const page = await browser.newPage();

console.log('Opening Vercel login...');
await page.goto('https://vercel.com/login', { waitUntil: 'networkidle' });

console.log('');
console.log('===========================================');
console.log('PLEASE LOG IN TO VERCEL IN THE BROWSER');
console.log('===========================================');
console.log('');
console.log('1. Click "Continue with GitHub"');
console.log('2. Authorize if prompted');
console.log('3. Once logged in, I will continue automatically');
console.log('');

// Wait for login (detect dashboard URL)
let loggedIn = false;
for (let i = 0; i < 60; i++) {
  await page.waitForTimeout(2000);
  const url = page.url();
  if (url.includes('dashboard') || url.includes('vercel.com/') && !url.includes('login')) {
    loggedIn = true;
    console.log('Login detected! Continuing...');
    break;
  }
  if (i % 5 === 0) console.log('Waiting for login... (' + (60-i)*2 + 's remaining)');
}

if (!loggedIn) {
  console.log('Login timeout. Please try again.');
  await browser.close();
  process.exit(1);
}

// Now navigate to the project
console.log('Going to bible-study-app project...');

// First check current page for the project
await page.waitForTimeout(2000);
let found = false;

try {
  // Look for the project link
  const projectLink = page.locator('a[href*="bible-study-app"]').first();
  if (await projectLink.isVisible({ timeout: 3000 })) {
    await projectLink.click();
    found = true;
  }
} catch (e) {}

if (!found) {
  // Try going directly
  console.log('Navigating directly to project...');
  await page.goto('https://vercel.com/dashboard');
  await page.waitForTimeout(3000);
  
  // Search for project
  const searchInput = page.locator('input[placeholder*="Search"]').first();
  if (await searchInput.isVisible({ timeout: 3000 })) {
    await searchInput.fill('bible-study-app');
    await page.waitForTimeout(2000);
  }
  
  // Click on project if found
  const proj = page.locator('text=bible-study-app').first();
  if (await proj.isVisible({ timeout: 5000 })) {
    await proj.click();
  }
}

await page.waitForTimeout(3000);
console.log('On project page:', page.url());

// Click Deployments tab
console.log('Clicking Deployments...');
await page.click('text=Deployments');
await page.waitForTimeout(2000);

// Find the menu button (three dots) on the first deployment row
console.log('Looking for deployment actions menu...');
const menuButtons = page.locator('button[aria-haspopup="menu"], [data-testid="deployment-menu"]');
const firstMenu = menuButtons.first();

if (await firstMenu.isVisible({ timeout: 5000 })) {
  await firstMenu.click();
  await page.waitForTimeout(1000);
  
  // Click Redeploy
  console.log('Clicking Redeploy...');
  await page.click('text=Redeploy');
  await page.waitForTimeout(2000);
  
  // Look for the cache checkbox and uncheck it
  console.log('Unchecking build cache...');
  const checkbox = page.locator('input[type="checkbox"]').first();
  if (await checkbox.isVisible({ timeout: 3000 })) {
    if (await checkbox.isChecked()) {
      await checkbox.click();
      console.log('Build cache unchecked!');
    }
  }
  
  await page.waitForTimeout(1000);
  
  // Click the final Redeploy button
  console.log('Clicking final Redeploy button...');
  const redeployBtn = page.locator('button:has-text("Redeploy")').last();
  await redeployBtn.click();
  
  console.log('');
  console.log('===========================================');
  console.log('REDEPLOY STARTED!');
  console.log('===========================================');
  console.log('');
  
  await page.waitForTimeout(5000);
  await page.screenshot({ path: '/tmp/vercel-redeploy-success.png' });
} else {
  console.log('Could not find deployment menu. Taking screenshot...');
  await page.screenshot({ path: '/tmp/vercel-need-help.png' });
}

console.log('Keeping browser open for 30 more seconds...');
await page.waitForTimeout(30000);
await browser.close();
