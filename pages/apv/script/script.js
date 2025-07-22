document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const buttons = document.querySelectorAll(".collapsible");

  buttons.forEach(button => {
    const text = button.textContent.toLowerCase();
    const content = button.nextElementSibling;

    if (text.includes(filter)) {
      button.style.display = "";
      content.style.display = "";
    } else {
      button.style.display = "none";
      content.style.display = "none";
    }
  });
});
