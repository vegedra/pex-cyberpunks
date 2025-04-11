// Script geral do site (para todas as páginas)
document.addEventListener('DOMContentLoaded', function() {
    // Filtro de artigos
    if (document.getElementById('categoria')) {
        document.getElementById('categoria').addEventListener('change', function() {
            const selectedCategory = this.value;
            const articles = document.querySelectorAll('.lista-artigos article');
            
            articles.forEach(article => {
                if (selectedCategory === 'todos' || article.dataset.categoria === selectedCategory) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    }
    
    // Animação dos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});