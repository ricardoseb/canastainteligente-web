const task = await taskSpace('check-vercel');
const page = task.page('p1');

const details = await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button')).map(b => ({
    text: b.innerText.trim(),
    type: b.type,
    disabled: b.disabled
  }));
  const inputs = Array.from(document.querySelectorAll('input')).map(i => ({
    placeholder: i.placeholder,
    value: i.value,
    id: i.id,
    name: i.name
  }));
  return { buttons, inputs };
});
console.log('Clone page details:\n', JSON.stringify(details, null, 2));
