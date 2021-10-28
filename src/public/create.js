const $myForm = document.forms.productForm;
const postWrapper2 = document.querySelector("[data-postWrapper]");
$myForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData($myForm));
  const response = await fetch("/admin/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    const dataFromBack = await response.json();
    postWrapper2.insertAdjacentHTML("beforeend", newProduct(dataFromBack));
  }
});

const newProduct = (dataFromBack) => {
  return `<div class="card" style="width: 50rem" id="${dataFromBack.id}" data-productid="${dataFromBack.id}">
      <div class="card-body">
        <h5 class="card-title">${dataFromBack.product_name}</h5>
        <h6 class="card-subtitle mb-4 text-muted">Price: ${dataFromBack.price}</h6>
        <a href='${dataFromBack.гкд}' class='card-subtitle mb-4 text-muted'>Ссылка на
          картинку</a>
        <p class="card-text">${dataFromBack.desc_short}</p>
        <p class="card-text">${dataFromBack.desc_full}</p>
        <a href="/admin/products/${dataFromBack.id}/edit" class="card-link">Edit</a>
        <button type="submit">Delete</button>
      </div>
    </div>`;
};
