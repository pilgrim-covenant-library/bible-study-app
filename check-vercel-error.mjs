import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

console.log('Opening Vercel...');
await page.goto('https://vercel.com/login', { waitUntil: 'networkidle' });

// Wait for login
console.log('Waiting for login (you should already be logged in)...');
for (let i = 0; i < 60; i++) {
  await page.waitForTimeout(1000);
  if (!page.url().includes('login')) break;
}

await page.goto('https://vercel.com/pilgrim-covenant-librarys-projects/bible-study-app/deployments', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

// Click on the first failed deployment to see the error
console.log('Clicking on failed deployment...');
try {
  // Click on the deployment ID/name to see details
  await page.click('text=BpSGxyX8R', { timeout: 5000 });
  await page.waitForTimeout(3000);
  
  // Take screenshot of the error
  await page.screenshot({ path: '/tmp/vercel-error-details.png', fullPage: true });
  console.log('Screenshot saved to /tmp/vercel-error-details.png');
  
  // Try to get error text
  const errorText = await page.locator('.error, [class*="error"], pre, code').first().textContent({ timeout: 5000 }).catch(() => 'No error text found');
  console.log('Error text:', errorText?.substring(0, 500));
  
} catch (e) {
  console.log('Error:', e.message);
  await page.screenshot({ path: '/tmp/vercel-error-page.png' });
}

await page.waitForTimeout(5000);
await browser.close();
