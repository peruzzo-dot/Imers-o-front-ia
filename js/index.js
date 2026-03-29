console.log('Bem-vindo à Netflix!');

// Salva no localStorage o perfil ativo (nome e imagem) quando o usuário clicar em um perfil na index
document.addEventListener('DOMContentLoaded', () => {
	const profileLinks = document.querySelectorAll('.profile');
	profileLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			// Encontrar IMG e FIGCAPTION dentro do link clicado
			const img = link.querySelector('img');
			const caption = link.querySelector('figcaption');
			if (!img || !caption) return;

			// Pegamos o atributo src exatamente como está no HTML (relativo)
			const srcAttr = img.getAttribute('src') || '';
			const filename = srcAttr.split('/').pop(); // ex: 'perfil-1.jpg'
			const nome = caption.textContent.trim();

			try {
				localStorage.setItem('perfilAtivoNome', nome);
				// armazenamos apenas o nome do arquivo para montar o caminho corretamente em catalogo
				localStorage.setItem('perfilAtivoImagem', filename);
			} catch (err) {
				// se o storage falhar, não interrompe a navegação
				console.error('Não foi possível salvar o perfil no localStorage', err);
			}
			// Não previne a navegação; localStorage é síncrono, então o valor estará disponível na página destino
		});
	});
});