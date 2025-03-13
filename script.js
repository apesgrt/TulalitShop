document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".animated-text");
    let textArray = ["SELAMAT DATANG DI RAFFZ STORE", "BEST PANEL & MC HOSTING", "ORDER SEKARANG!"];
    let index = 0;

    setInterval(() => {
        text.textContent = textArray[index];
        index = (index + 1) % textArray.length;
    }, 3000);
});