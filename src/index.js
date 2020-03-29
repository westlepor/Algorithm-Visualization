const Run = require("./js/run.js");
const run = new Run();

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
const closeButton = document.getElementById("modal-close-button");
const openButton = document.getElementById("modal-open-button");

closeButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});
