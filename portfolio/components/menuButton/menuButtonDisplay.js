import { createMenuButtons } from "./menuButtonCreate.js";

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.querySelector(".menu");

    if (!menuContainer) {
        console.error("Erro: Elemento .menu não encontrado no HTML!");
        return;
    }

    createMenuButtons().forEach(button => {
        menuContainer.appendChild(button.render());
    });
});
