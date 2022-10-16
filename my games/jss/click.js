var mani = 0;
function clicks() {
    mani = mani +1;
    document.getElementById("balans").innerHTML = mani;
}

if(localStorage.storedList) {
    clicks();
    
}