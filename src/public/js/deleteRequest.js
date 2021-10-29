const postWrapper = document.querySelector("[data-postWrapper]");
postWrapper.addEventListener("click", async (event) => {
  if (event.target.tagName === "BUTTON" && event.target.innerText === "Delete") {
    event.preventDefault();
    const post = event.target.closest("[data-requestid]");
    const id = post.dataset.requestid;
    const response = await fetch(`/admin/requests/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      post.remove();
    }
  }
});
