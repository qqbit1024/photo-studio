const postWrapper = document.querySelector("[data-postWrapper]");
postWrapper.addEventListener("click", async (event) => {
  if (event.target.tagName === "BUTTON" && event.target.innerText === "Delete") {
    event.preventDefault();
    const post = event.target.closest("[data-productid]");
    const id = post.dataset.productid;
    // console.log(123);
    const response = await fetch(`/admin/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // console.log(123);
      post.remove();
    }
  }
});
