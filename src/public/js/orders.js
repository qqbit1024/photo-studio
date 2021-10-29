const $orderForm = document.forms.orderForm;

document.addEventListener('submit', async (event) => {
  event.preventDefault();
  const all = document.querySelectorAll('[data-productid]');
  const products = [];
  let total = 0;
  all.forEach((product) => {
    const id = product.dataset.productid;
    const checkbox = product.querySelector('.form-check-input');
    const hours = product.querySelector('#hours').value;
    const equip_count = product.querySelector('#equip_count').value;
    const { price } = product.dataset;
    total += hours * equip_count * price;

    if (checkbox.checked) {
      products.push({
        id,
        hours,
        equip_count,

      });
    }
  });
  
  const customerInfo = Object.fromEntries(new FormData($orderForm));
  event.target.innerHTML = `<span
      class='spinner-border spinner-border-sm'
      role='status'
      aria-hidden='true'
    ></span>
    Loading...`
  const response = await fetch('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customerInfo, products, total }),
  });
  

  if (response.ok) {
    window.location = '/';
  }
});

const $btn = document.querySelector('.btn')
const $spanTotal = document.querySelector('#total')

$btn.addEventListener('click', (event)=> {
  const all = document.querySelectorAll('[data-productid]');
  let total = 0;
  all.forEach((product) => {
    const checkbox = product.querySelector('.form-check-input');
    const hours = product.querySelector('#hours').value;
    const equip_count = product.querySelector('#equip_count').value;
    const { price } = product.dataset;
    if (checkbox.checked) {
      total += hours * equip_count * price;
    }

  });
  $spanTotal.textContent = total + ' pуб.';
})
