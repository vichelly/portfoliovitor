const selec = (el) => document.querySelector(el);

function showprofile(){

    selec(".menu").style.display = "none";
    selec(".profile").style.display = "flex"
    selec(".back").style.display = "block";
}
function showcurriculo(){
    selec(".menu").style.display = "none";
    selec(".curriculo").style.display = "flex";
    selec(".back").style.display = "block";
}

function back(){
    selec(".menu").style.display = "block";
    selec(".curriculo").style.display = "none";
    selec(".profile").style.display = "none";
}