const task = await taskSpace('check-vercel');
const page = task.page('p1');

const popupUrl = await page.evaluate(() => {
  let targetUrl = '';
  const origOpen = window.open;
  window.open = function(url) {
    targetUrl = url;
    return null;
  };
  const buttons = Array.from(document.querySelectorAll('button, a'));
  const connBtn = buttons.find(b => b.innerText.trim() === 'Connect');
  if (connBtn) connBtn.click();
  window.open = origOpen;
  return targetUrl;
});
console.log('Intercepted popup URL:', popupUrl);
