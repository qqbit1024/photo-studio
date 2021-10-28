const $container = document.querySelector('.container');

$container.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.name === 'buttonForList') {
    const list = event.target.closest('li');
    const listId = list.id;
    const status = list.querySelector('#status');
    const response = await fetch(`/admin/orders/${listId}`, {
      method: 'POST',
    });
    if (response.ok) {
      status.textContent = 'Выполнено';
      event.target.classList.add('disabled')
      
    }
  }
});
