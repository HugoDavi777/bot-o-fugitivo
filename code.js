// function esquivar(){
//     alert("mause sobre botão");
// }
function esquivar(){
    var botao = document.querySelector("#bt02");
    botao.style.position = "absolute";
    botao.style.top = mudarPosicao(10, 94);
    botao.style.left = mudarPosicao(10, 94);
}
function mudarPosicao(min,max){
    let position = Math.floor(Math.random() *(max - min)+min);
    return position + "%"
}
function respostaSim(){
    alert("🐧🐥🦉🦟");
}
function esquivarMobile(){
    esquivar();
    setTimeout(esquivarMobile,200)
}
if (window.innerWidth <= 450){
    esquivarMobile()
}
