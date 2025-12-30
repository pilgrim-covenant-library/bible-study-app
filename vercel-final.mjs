import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

console.log('Opening Vercel login...');
console.log('');
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║  A BROWSER WINDOW HAS OPENED                              ║');
console.log('║                                                           ║');
console.log('║  1. Click "Continue with GitHub" in the browser           ║');
console.log('║  2. Log in with your GitHub account                       ║');
console.log('║  3. I will automatically complete the redeploy            ║');
console.log('║                                                           ║');
console.log('║  Waiting up to 5 minutes for you to log in...             ║');
console.log('╚═══════════════════════════════════════════════════════════╝');
console.log('');

await page.goto('https://vercel.com/login', { waitUntil: 'networkidle' });

// Wait for login - 5 minutes
for (let i = 0; i < 150; i++) {
  await page.waitForTimeout(2000);
  const url = page.url();
  
  if (!url.includes('login') && (url.includes('dashboard') || url.includes('vercel.com/'))) {
    console.log('✓ Logged in! Proceeding with redeploy...');
    
    await page.waitForTimeout(2000);
    
    // Go to dashboard
    await page.goto('https://vercel.com/dashboard', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    // Look for bible-study-app
    console.log('Looking for bible-study-app project...');
    
    try {
      await page.click('text=bible-study-app', { timeout: 10000 });
      console.log('✓ Found project');
      await page.waitForTimeout(2000);
      
      // Go to Deployments
      await page.click('text=Deployments', { timeout: 5000 });
      console.log('✓ Opened Deployments');
      await page.waitForTimeout(2000);
      
      // Click the three-dots menu on first deployment
      const menuBtn = page.locator('[aria-haspopup="menu"]').first();
      await menuBtn.click({ timeout: 5000 });
      console.log('✓ Opened menu');
      await page.waitForTimeout(1000);
      
      // Click Redeploy option
      await page.click('text=Redeploy', { timeout: 5000 });
      console.log('✓ Clicked Redeploy');
      await page.waitForTimeout(2000);
      
      // Uncheck "Use existing Build Cache" 
      const checkboxes = page.locator('input[type="checkbox"]');
      const count = await checkboxes.count();
      for (let j = 0; j < count; j++) {
        const cb = checkboxes.nth(j);
        if (await cb.isChecked()) {
          await cb.click();
          console.log('✓ Unchecked build cache');
        }
      }
      
      await page.waitForTimeout(1000);
      
      // Click final Redeploy button
      const finalBtn = page.locator('button:has-text("Redeploy")').last();
      await finalBtn.click({ timeout: 5000 });
      console.log('');
      console.log('╔═══════════════════════════════════════════════════════════╗');
      console.log('║  ✓ REDEPLOY STARTED SUCCESSFULLY!                         ║');
      console.log('║                                                           ║');
      console.log('║  Wait 2-3 minutes for the build to complete.              ║');
      console.log('╚═══════════════════════════════════════════════════════════╝');
      
      await page.waitForTimeout(10000);
      await browser.close();
      process.exit(0);
      
    } catch (e) {
      console.log('Error:', e.message);
      console.log('Taking screenshot for debugging...');
      await page.screenshot({ path: '/tmp/vercel-debug.png' });
    }
    
    break;
  }
  
  if (i % 15 === 0 && i > 0) {
    const remaining = Math.round((150 - i) * 2 / 60);
    console.log(`Still waiting for login... (${remaining} min remaining)`);
  }
}

console.log('Closing browser...');
await browser.close();
