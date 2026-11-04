const task = await taskSpace('check-vercel');
const page = task.page('p1');

console.log('Navigating to https://vercel.com/device ...');
await page.goto('https://vercel.com/device');
await page.waitForTimeout(3000);

console.log('Page text on device verification:\n', await page.evaluate(() => document.body.innerText.slice(0, 1000)));

// Type the code TXSG-NHCJ
console.log('Entering code TXSG-NHCJ...');
await page.keyboard.type('TXSGNHCJ');
await page.waitForTimeout(1000);

// Try finding submit or verify button
await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  const btn = buttons.find(b => b.innerText.includes('Verify') || b.innerText.includes('Submit') || b.innerText.includes('Continue'));
  if (btn) btn.click();
});

await page.waitForTimeout(4000);

const textAfter = await page.evaluate(() => document.body.innerText.slice(0, 1500));
console.log('Text after submitting code:\n', textAfter);
