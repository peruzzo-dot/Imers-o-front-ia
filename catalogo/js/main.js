import { categories } from "../data.js";
import { createCarousel } from "../Carousel.js";

document.addEventListener('DOMContentLoaded', () => {
    // Recupera informações do perfil ativo (se houver)
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) {
            // Ajusta o caminho da imagem dependendo do formato armazenado
            let imgPath = imagemPerfil;
            if (!imagemPerfil.includes('/') && !imagemPerfil.startsWith('http')) {
                // se for apenas o nome do arquivo, monta o caminho relativo correto a partir de catalogo/
                imgPath = '../assets/' + imagemPerfil;
            } else if (imagemPerfil.startsWith('assets/')) {
                // armazenado como 'assets/perfil-1.jpg' -> ajusta para '../assets/...'
                imgPath = '../' + imagemPerfil;
            } else if (imagemPerfil.startsWith('/assets/')) {
                // armazenado como '/assets/perfil-1.jpg' (raiz) -> torna relativo
                imgPath = '..' + imagemPerfil;
            }
            profileIcon.src = imgPath;
        }
    }

    // Injeta as carousels/categories na página
    const container = document.getElementById('main-content');
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
