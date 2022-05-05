// recursos
let $ = (e) => document.querySelector(e);
var carouselItem = $(".carouselItem");




// controles
const controls = {
    item : 0,
    tmp : 0,
    segundo : 10,

    frasesItem : [
        {autor: "Github-tomasmanueltm", msg: "Projeto interativo"},
        {autor: "Desenvolvimento", msg: "Html, Sass, Js"},
        {autor: "Sobre", msg: "Na minha criação tinha de tudo e um pouco mais"},
        {autor: "Meu proposito", msg: "Espero que usas sua criativade para melhorar este meu projeto"}
    ]
}

// funcao
carouselStart = ()=>{
    if(controls.tmp == 10){
        controls.tmp = 0
        
        if(controls.item == controls.frasesItem.length){
                controls.item = 0
        }
        carouselItem.innerHTML =  `<h2>${controls.frasesItem[controls.item].msg}</h2><p>@${controls.frasesItem[controls.item].autor}<p>`;
        controls.item++
    }
    controls.tmp++
}

// conometro
setInterval(()=>{carouselStart()}, 300);