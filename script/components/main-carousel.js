// 1 acessar a Janela (browser)
// 2 Pegar o HTML todo
// 3 Pegar o botão
// 4 Saber que o botão está sendo clicado

// 5 Acessar a Janela 
// 6 Pegar o HTML todo
// 7 Pegar o elements
// 8 Mover o elements para direita

// 9
 
 const btnRight = window.sdocument.querySelector(".button-arrow.-right");
 const elements = window.document.querySelector(".elements");

 btnRight.addEventListener("click", function( ) {
    elements.style = "transform: translateX(100px)";
 });

