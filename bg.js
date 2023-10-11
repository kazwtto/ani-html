document.addEventListener("DOMContentLoaded", function () {
    const sky = document.getElementById("starry-sky");

    // Lista de cores variáveis
    const colors = ["#fff", "#87CEEB", "#800080", "#FF69B4", "#9400D3"];

    // Adicione estrelas dinamicamente
    for (let i = 0; i < 50; i++) {
        const star = createStar();
        sky.appendChild(star);
    }

    function createStar() {
        const star = document.createElement("div");
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = color;
        star.className = Math.random() < 0.5 ? "star" : "twinkling-star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Duração variável
        star.style.width = `${Math.random() * 3}px`; // Tamanhos variáveis
        star.style.height = star.style.width;

        return star;
    }
});
