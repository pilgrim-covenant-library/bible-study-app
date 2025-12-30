import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

console.log('Opening Vercel project settings...');
console.log('');
console.log('Please log in if needed, then I will change the Node version.');
console.log('');

await page.goto('https://vercel.com/pilgrim-covenant-librarys-projects/bible-study-app/settings/general', { waitUntil: 'networkidle' });

// Wait for page to load
await page.waitForTimeout(5000);

// Check if logged in
if (page.url().includes('login')) {
  console.log('Waiting for you to log in...');
  for (let i = 0; i < 120; i++) {
    await page.waitForTimeout(1000);
    if (!page.url().includes('login')) break;
  }
  // Navigate back to settings after login
  await page.goto('https://vercel.com/pilgrim-covenant-librarys-projects/bible-study-app/settings/general', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
}

console.log('On settings page, looking for Node.js Version...');
await page.screenshot({ path: '/tmp/vercel-settings.png' });

try {
  // Scroll down to find Node.js Version section
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(1000);

  // Look for Node.js Version dropdown
  const nodeVersionSection = await page.locator('text=Node.js Version').first();
  if (await nodeVersionSection.isVisible()) {
    console.log('Found Node.js Version section');

    // Find and click the dropdown near Node.js Version
    const dropdown = await page.locator('select, [role="listbox"], [role="combobox"]').first();
    if (await dropdown.isVisible()) {
      await dropdown.click();
      await page.waitForTimeout(500);

      // Select 22.x
      await page.click('text=22.x', { timeout: 3000 });
      console.log('Selected 22.x');

      // Save
      await page.click('button:has-text("Save")', { timeout: 3000 });
      console.log('✓ Saved Node.js version to 22.x');
    }
  }
} catch (e) {
  console.log('Error:', e.message);
  await page.screenshot({ path: '/tmp/vercel-settings-error.png' });
  console.log('Screenshot saved. Please manually change Node.js Version to 22.x in the settings.');
}

console.log('');
console.log('Keeping browser open - please verify the change...');
await page.waitForTimeout(30000);
await browser.close();
