document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const tabletOverlay = document.getElementById("tabletOverlay");

    if (menuButton && tabletOverlay) {
        menuButton.addEventListener("click", () => {
            tabletOverlay.showModal(); // Відкриває діалог
        });

        // Закриття діалогу, якщо потрібно (додайте кнопку закриття в HTML)
        tabletOverlay.addEventListener("click", (event) => {
            if (event.target === tabletOverlay) {
                tabletOverlay.close(); // Закриває діалог
            }
        });
    }
});
