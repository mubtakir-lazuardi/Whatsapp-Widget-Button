// Get the modal container and toggle button
const modalContainer = document.querySelector(".wpp__container");
const toggleButton = document.querySelector(".wpp__toggle");

// Set the initial state of the modal container to hidden and closed
modalContainer.style.transform = "translate3d(0, 100vh, 0)";
modalContainer.style.opacity = 0;
modalContainer.style.pointerEvents = "none";

// Add an event listener to the toggle button
toggleButton.addEventListener("click", () => {
  // Toggle the visibility of the modal container
  modalContainer.style.transform = "translate3d(0, 0, 0)";
  modalContainer.style.opacity = 1;
  modalContainer.style.pointerEvents = "all";

  // Add an event listener to the close button
  const closeButton = document.querySelector(".wpp__close-btn");
  closeButton.addEventListener("click", () => {
    // Close the modal container
    modalContainer.style.transform = "translate3d(0, 100vh, 0)";
    modalContainer.style.opacity = 0;
    modalContainer.style.pointerEvents = "none";
  });
});