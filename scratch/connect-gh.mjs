const task = await taskSpace('check-vercel');
const page = task.page('p1');

console.log('Navigating to project Git settings...');
await page.goto('https://vercel.com/canasta-inteligente/canasta-inteligente/settings/git');
await page.waitForTimeout(3000);

console.log('Finding GitHub connect button...');
await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button, a'));
  const ghBtn = buttons.find(b => b.innerText.includes('GitHub'));
  if (ghBtn) {
    ghBtn.click();
    console.log('Clicked GitHub button');
  }
});

await page.waitForTimeout(3000);

const text = await page.evaluate(() => document.body.innerText.slice(0, 2000));
console.log('Page text after click:\n', text);
