//fonction pour generer un nombre aleatoire entre 1 et 255 (ce nombre sera un indice RGB)
function genRandom(){
    return Math.floor(Math.random() * 255);
}
//fonction pour changer la couleur
function changeColor(item){
    let x=genRandom();
    let y=genRandom();
    let z=genRandom();
    item.style.color=`rgb(${x},${y},${z})`
}
//our main function
function applyChanges(){
    document.addEventListener("DOMContentLoaded", ()=>{
        items=document.querySelectorAll("ol li");
        items.forEach(item => {
            item.addEventListener("click", ()=>{
                changeColor(item);
            });
        });
    });
}
applyChanges();