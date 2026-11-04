const task = await taskSpace('check-vercel');
const page = task.page('p1');

console.log('Clicking Send Code to Email...');
await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  const sendBtn = buttons.find(b => b.innerText.includes('Send Code to Email'));
  if (sendBtn) sendBtn.click();
});

await page.waitForTimeout(3000);

console.log('Switching to page2 for Gmail...');
const page2 = task.page('p2');
await page2.goto('https://mail.google.com/mail/u/0/#inbox');
await page2.waitForTimeout(4000);

// Click latest Vercel email
console.log('Clicking latest Vercel email...');
await page2.evaluate(() => {
  const emails = Array.from(document.querySelectorAll('tr, [role="row"]'));
  const vercelRow = emails.find(row => row.innerText.includes('Vercel'));
  if (vercelRow) vercelRow.click();
});
await page2.waitForTimeout(3000);

const gmailText = await page2.evaluate(() => document.body.innerText.slice(0, 2500));
console.log('Gmail content:\n', gmailText.slice(0, 1500));
