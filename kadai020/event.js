console.log(document.getElementById("text"));
console.log(document.getElementById("btn"));

btn.addEventListener("click", () => {
    const text = document.getElementById("text");
    text.textContent = "ボタンをクリックしました";
})