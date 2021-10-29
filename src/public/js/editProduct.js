const $editForm = document.forms.editForm;
const productId = document.querySelector("[data-productId]").dataset.productid;
$editForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log(12334423);
  const formData = Object.fromEntries(new FormData($editForm));
  const response = await fetch(`/admin/products/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    window.location = "/admin/products";
  }
});
