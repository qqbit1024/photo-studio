const postWrapper2 = document.querySelector("[data-postWrapper]");
postWrapper2.addEventListener("click", async (event) => {
  if (event.target.tagName === "BUTTON" && event.target.innerText === "Done") {
    event.preventDefault();
    const post = event.target.closest("[data-requestid]");
    const id = post.dataset.requestid;
    const response = await fetch(`/admin/requests`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      const statusFromBack = await response.json();
      const statusDiv = post.querySelector("[data-status]");
      statusDiv.innerText = `Статус: ${statusFromBack.status}`;
    }
  }
});
