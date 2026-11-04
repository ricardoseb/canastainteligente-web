const task = await taskSpace('check-vercel');
const page2 = await task.newPage();

console.log('Navigating page2 to https://github.com/apps/vercel/installations/new ...');
await page2.goto('https://github.com/apps/vercel/installations/new');
await page2.waitForTimeout(3000);

console.log('URL:', await page2.url());
console.log('Title:', await page2.title());
const text = await page2.evaluate(() => document.body.innerText.slice(0, 1500));
console.log('GitHub page text:\n', text);
