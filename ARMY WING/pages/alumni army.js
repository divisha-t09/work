const toggleButtons = document.querySelectorAll(".toggleButton");

toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".army-card");

    const details = card.querySelector(".army-details");
    const toggle = details.classList.toggle("show");

    if (toggle) {
      button.textContent = "Hide Details";
    } else {
      button.textContent = "Know More";
    }
  });
});