class MenuButton {
    constructor(text, imgSrc, onClick) {
        this.text = text;
        this.imgSrc = imgSrc;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement("div");
        button.classList.add("menu-button");
        button.innerHTML = `
            <div>${this.text}</div>
            <div><img src="${this.imgSrc}" alt=""></div>
        `;
        button.onclick = this.onClick;
        return button;
    }
}

const profileButton = new MenuButton("Sobre mim", "images/person-icon-1682.png", showprofile);
const educationButton = new MenuButton("Educação & Projetos", "images/project-management.png", showcurriculo);
const certificatesButton = new MenuButton("Certificados", "images/certified-icon.png", showcertificados);

document.querySelector(".menu").appendChild(profileButton.render());
document.querySelector(".menu").appendChild(educationButton.render());
document.querySelector(".menu").appendChild(certificatesButton.render());
