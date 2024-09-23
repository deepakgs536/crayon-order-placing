var hide = 0
function hiderightbar(){
    if(hide){
        document.querySelector(".rightbar").style.display = "block"
        document.querySelector(".rightbar2").style.display = "none"
        hide = 0
    }
    else{
        document.querySelector(".rightbar").style.display = "none"
        document.querySelector(".rightbar2").style.display = "block"
        hide = 1
    }
    
}
function changerightbar(){
    document.querySelector(".rightbar2").style.display = "none"
    document.querySelector(".rightbar3").style.display = "block"
}
function gotodashboard(){
    document.querySelector(".rightbar3").style.display = "none"
    document.querySelector(".rightbar").style.display = "block"
}
function alertmessage(){
    alert("Thanks for the Purchase")
    while(window)
    window.close()

}