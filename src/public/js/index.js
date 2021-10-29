const $orderForm = document.forms.orderForm;
const $productContainer = document.querySelector('.product-container');
const $equipInput = document.querySelector('[name=equip_count]')
const $hoursInput = document.querySelector('[name=hours]')
const $spanTotal = document.querySelector('#total')

$productContainer.addEventListener('click', (event) => {
  if (event.target.id === 'button') {
    const productId = event.target.closest('[data-productid]').dataset.productid;
    const { price } = event.target.closest('[data-price]').dataset;
    $orderForm.dataset.formproductid = productId;
    $orderForm.dataset.price = price;
    $spanTotal.textContent = price
    
  }
});

document.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData($orderForm));
  const { price } = $orderForm.dataset;
  const productId = $orderForm.dataset.formproductid;
  const total = data.hours * data.equip_count * price;
  const customerInfo = {
    name: data.name,
    surname: data.surname,
    phone: data.phone,
    email: data.email,
  };
  const product = { id: productId, hours: data.hours, equip_count: data.equip_count };
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
    body: JSON.stringify({ customerInfo, products: [product], total }),
  });

  if (response.ok) {
    window.location = '/';
  }
});

$equipInput.addEventListener('keyup', (event) => {
  if($equipInput.value) {
    const price = $orderForm.dataset.price;
    $spanTotal.textContent = price * $equipInput.value * $hoursInput.value
  } 
})

$hoursInput.addEventListener('keyup', (event) => {
  if($equipInput.value) {
    const price = $orderForm.dataset.price;
    $spanTotal.textContent = price * $equipInput.value * $hoursInput.value
  } 
})

