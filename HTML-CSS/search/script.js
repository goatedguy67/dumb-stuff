document.addEventListener("DOMContentLoaded", () => {
  const barText = document.getElementsByName("q")[0];
  const x = document.getElementsByClassName("x")[0];
  barText.addEventListener("input", function () {
    if (this.value !== "") {
      x.classList.add("has-value");
      x.style.display = "block";
    } else {
      x.classList.remove("has-value");
      x.style.display = "none";
    }
  });

  x.addEventListener("click", function () {
    barText.value = "";
    x.classList.remove("has-value");
    x.style.display = "none";

    barText.focus();
  });
});
