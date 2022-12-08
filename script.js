document.getElementById("menu").addEventListener("click",()=>{
    document.getElementsByClassName("navbar")[0].style.display = "flex";
    document.getElementById("close").style.display = "block";
    document.getElementById("menu").style.display = "none";
})
document.getElementById("close").addEventListener("click",()=>{
    document.getElementsByClassName("navbar")[0].style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("menu").style.display = "block";
})
