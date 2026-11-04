const task = await taskSpace('check-vercel');
const page = task.page('p1');

console.log('Clicking Connect GitHub button...');
await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button, a'));
  const connBtn = buttons.find(b => b.innerText.trim() === 'Connect');
  if (connBtn) connBtn.click();
});

await page.waitForTimeout(3000);

console.log('URL after click:', await page.url());
const text = await page.evaluate(() => document.body.innerText.slice(0, 1500));
console.log('Page text:\n', text);
