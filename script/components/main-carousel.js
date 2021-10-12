// 1 acessar a Janela (browser)
// 2 Pegar o HTML todo
// 3 Pegar o botão
// 4 Saber que o botão está sendo clicado

// 5 Acessar a Janela 
// 6 Pegar o HTML todo
// 7 Pegar o elements
// 8 Mover o elements para direita

// 9
 
 const btnRight = window.document.querySelector(".button-arrow.-right");
 const elements = window.document.querySelector(".elements");
 let pixels = 10;

 btnRight.addEventListener("click", function( ) {
    pixels += 10;
    elements.style = `transform: translateX(${pixels}px)`;
 });

