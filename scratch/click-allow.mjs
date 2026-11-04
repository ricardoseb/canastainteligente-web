const task = await taskSpace('check-vercel');
const page = task.page('p1');

console.log('Waiting for verification details...');
await page.waitForTimeout(3000);

const text = await page.evaluate(() => document.body.innerText);
console.log('Page text now:\n', text);

console.log('Clicking Allow Access...');
await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  const allowBtn = buttons.find(b => b.innerText.includes('Allow Access') || b.innerText.includes('Confirm'));
  if (allowBtn) allowBtn.click();
});

await page.waitForTimeout(4000);

console.log('Page text after click:\n', await page.evaluate(() => document.body.innerText));
