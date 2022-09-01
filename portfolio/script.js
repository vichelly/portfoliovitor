function showprofile(){
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".profile").style.display = "flex"
    document.querySelector(".back").style.display = "block";
}
function showcurriculo(){
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".curriculo").style.display = "flex";
    document.querySelector(".back").style.display = "block";
}

function back(){
    document.querySelector(".menu").style.display = "flex";
    document.querySelector(".curriculo").style.display = "none";
    document.querySelector(".profile").style.display = "none";
}