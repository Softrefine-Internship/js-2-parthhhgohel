const deactivateMainBtn = document.querySelector(".deactivate-btn");
const cancelBtn = document.querySelector(".cancel");
const deactivateBtn = document.querySelector(".deactivate");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".cross");

function openModal() {
    overlay.classList.add("active");
}

function closeModal() {
    overlay.classList.remove("active");
}

deactivateMainBtn.addEventListener("click", openModal);
cancelBtn.addEventListener("click", closeModal);
deactivateBtn.addEventListener("click", function () {
    alert("Account deactivated successfully!");
    deactivateMainBtn.style.backgroundColor = "#ff7272ff";
    deactivateMainBtn.textContent = "Account Deactivated";
    deactivateMainBtn.disabled = true;
    closeModal();
});
closeIcon.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
        closeModal();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("active")) {
        closeModal();
    }
});