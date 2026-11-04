const task = await taskSpace('check-vercel');
const page = task.page('p1');

console.log('Navigating to https://vercel.com/account/settings/authentication ...');
await page.goto('https://vercel.com/account/settings/authentication');
await page.waitForTimeout(3000);

console.log('Auth page URL:', await page.url());
const text = await page.evaluate(() => document.body.innerText.slice(0, 2000));
console.log('Auth page text:\n', text);
