let $ = (e) => document.querySelector(e);

// pegar tela
var carouselItem = $(".carouselItem");

carouselItem.innerHTML = "<h2>Tomas Manuel</h2> <p>@Criador<p>";





const controls = {
    item : 0,
    tmp : 0,
    segundo : 10,

    frasesItem : [
        {autor: "Github-tomasmanuel", msg: "Projeto interativo"},
        {autor: "tomas", msg: "Na minha criação tinha de tudo e um pouco mais"},
        {autor: "tomasmanuel", msg: "Pprojeto criado em 05/05/2022 | 01h10 - 02h50"},
        {autor: "Proposito", msg: "Espero que usas sua criativade para melhorar este meu projeto"}
    ]
}

contTempo = ()=>{
   

    if(controls.tmp == 10)
    {
        controls.tmp = 0
        
        if(controls.item == controls.frasesItem.length)
        {
                controls.item = 0
        }
        controls.item++
       
        carouselItem.innerHTML =  `<h2>${controls.frasesItem[controls.item].msg}</h2><p>@${controls.frasesItem[controls.item].autor}<p>`;
    }
    controls.tmp++
}


setInterval(()=>{contTempo()}, 300);