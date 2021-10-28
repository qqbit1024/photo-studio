const $orderForm = document.forms.orderForm;
const $productContainer = document.querySelector('.product-container');

$productContainer.addEventListener('click', (event) => {
  if (event.target.id === 'button') {
    const productId = event.target.closest('[data-productid]').dataset.productid;
    const { price } = event.target.closest('[data-price]').dataset;
    $orderForm.dataset.formproductid = productId;
    $orderForm.dataset.price = price;
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

  const response = await fetch('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customerInfo, products: [product], total }),
  });

  if (response.ok) {
    window.location = '/';
    // console.log('asfasdfasfasdf');
  }
});
