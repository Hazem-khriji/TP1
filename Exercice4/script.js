function gen_random(){
    return Math.floor(Math.random() * 255);
}
function change_color(item){
    let x=gen_random();
    let y=gen_random();
    let z=gen_random();
    item.style.color=`rgb(${x},${y},${z})`
}
function apply_changes(){
    document.addEventListener("DOMContentLoaded", ()=>{
        items=document.querySelectorAll("ol li");
        items.forEach(item => {
            item.addEventListener("click", ()=>{
                change_color(item);
            });
        });
    });
}
apply_changes();