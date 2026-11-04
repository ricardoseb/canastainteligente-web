const task = await taskSpace('check-vercel');
const page = task.page('p1');

console.log('Typing code 933143 on p1...');
await page.keyboard.type('933143');
await page.waitForTimeout(500);

console.log('Clicking Verify...');
await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  const verifyBtn = buttons.find(b => b.innerText.trim() === 'Verify');
  if (verifyBtn) verifyBtn.click();
});

await page.waitForTimeout(5000);

console.log('Result on p1:\n', await page.evaluate(() => document.body.innerText.slice(0, 1500)));
