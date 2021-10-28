const exampleModal = document.getElementById('exampleModal');

exampleModal.addEventListener('show.bs.modal', (event) => {
  // Button that triggered the modal
  // Extract info from data-bs-* attributes
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
});

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
