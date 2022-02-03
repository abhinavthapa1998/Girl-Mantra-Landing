
window.addEventListener('wheel', (event)=>{
    let wom = document.getElementById("woman");
    let w = event.deltaY;
    let up = "translate(0, 60px)";
    let down = "translate(0, -60px)";
    if( w > 0){
    wom.style.transform = up ;
    }
    else{
        wom.style.transform = down ;
    }
})