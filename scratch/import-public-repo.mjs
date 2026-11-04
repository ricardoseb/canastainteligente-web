const task = await taskSpace('check-vercel');
const page = task.page('p1');

console.log('Navigating to https://vercel.com/new?teamSlug=canasta-inteligente...');
await page.goto('https://vercel.com/new?teamSlug=canasta-inteligente');
await page.waitForTimeout(3000);

console.log('Filling git-url input with https://github.com/ricardoseb/canastainteligente-web ...');
await page.fill('input[name="git-url"]', 'https://github.com/ricardoseb/canastainteligente-web');
await page.waitForTimeout(500);

await page.keyboard.press('Enter');
await page.waitForTimeout(5000);

console.log('Current URL:', await page.url());
const text = await page.evaluate(() => document.body.innerText.slice(0, 2000));
console.log('Page text after importing public repo:\n', text);
