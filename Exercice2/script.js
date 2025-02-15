document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.getElementById("paragraph");
    document.getElementById("color").addEventListener("input", (e) => {
        paragraph.style.color = e.target.value;
    });
    document.getElementById("number").addEventListener("input", (e) => {
        paragraph.style.fontSize = e.target.value + "px";
    });
    document.getElementById("choix").addEventListener("change", (e) => {
        paragraph.style.fontFamily = e.target.value;
    });
});
