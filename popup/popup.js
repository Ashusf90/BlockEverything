
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleBtn");

    let isBlocking = false;

    btn.addEventListener("click", () => {
    isBlocking = !isBlocking;

    if (isBlocking) {
        btn.textContent = "stop blocking.";
    } else {
        btn.textContent = "start blocking.";
    }
    });
});
