const menuHamburguer = window.document.querySelector('.menu-hamburger');
menuHamburguer.addEventListener('click', () => {
   toggleMenu();
});

function toggleMenu(){
    const nav = window.document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');
    
    // Alterna a visibilidade do menu
    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'flex'; // Altere de 'block' para 'flex' para garantir que os itens fiquem organizados verticalmente
    }else{
        nav.style.display = 'none';
    }
}
