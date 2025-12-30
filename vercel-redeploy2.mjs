import { chromium } from 'playwright';

// Launch with user's Chrome profile to get logged-in session
const browser = await chromium.launchPersistentContext(
  '/home/jonathan/.config/google-chrome/Default', 
  { 
    headless: false,
    channel: 'chrome',
    slowMo: 300
  }
);

const page = browser.pages()[0] || await browser.newPage();

console.log('Opening Vercel project page...');
await page.goto('https://vercel.com/dashboard', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

console.log('Current URL:', page.url());
await page.screenshot({ path: '/tmp/vercel-step1.png' });

// Check if we see the dashboard
const pageContent = await page.content();
if (pageContent.includes('bible-study-app') || pageContent.includes('Projects')) {
  console.log('Logged in! Looking for bible-study-app...');
  
  // Try to find and click the project
  try {
    await page.click('text=bible-study-app', { timeout: 5000 });
    await page.waitForTimeout(2000);
    console.log('Clicked on project');
    
    // Click Deployments
    await page.click('text=Deployments', { timeout: 5000 });
    await page.waitForTimeout(2000);
    console.log('Clicked Deployments');
    await page.screenshot({ path: '/tmp/vercel-step2.png' });
    
    // Look for the three dots menu
    const menuButton = await page.locator('[aria-label="Deployment actions"], [aria-haspopup="menu"], button:has(svg)').first();
    await menuButton.click();
    await page.waitForTimeout(1000);
    console.log('Clicked menu');
    await page.screenshot({ path: '/tmp/vercel-step3.png' });
    
    // Click Redeploy
    await page.click('text=Redeploy', { timeout: 5000 });
    await page.waitForTimeout(2000);
    console.log('Clicked Redeploy');
    await page.screenshot({ path: '/tmp/vercel-step4.png' });
    
    // Uncheck build cache if present
    const cacheCheckbox = await page.locator('input[type="checkbox"]').first();
    if (await cacheCheckbox.isVisible()) {
      const isChecked = await cacheCheckbox.isChecked();
      if (isChecked) {
        await cacheCheckbox.click();
        console.log('Unchecked build cache');
      }
    }
    
    // Click final Redeploy button
    await page.click('button:has-text("Redeploy"):not([disabled])', { timeout: 5000 });
    console.log('Started redeploy!');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/tmp/vercel-step5.png' });
    
  } catch (e) {
    console.log('Error during automation:', e.message);
    await page.screenshot({ path: '/tmp/vercel-error.png' });
  }
} else {
  console.log('Not logged in or different page');
  await page.screenshot({ path: '/tmp/vercel-notloggedin.png' });
}

console.log('Keeping browser open for 30 seconds...');
await page.waitForTimeout(30000);

await browser.close();
console.log('Done!');
