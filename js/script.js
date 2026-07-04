window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
    } else {
        header.style.background = "rgba(0,0,0,0.75)";
    }
    function toggleMenu(){
    document.querySelector("nav ul").classList.toggle("active");
}
function openPopup(){
    document.getElementById("bookingPopup").style.display = "flex";
}

function closePopup(){
    document.getElementById("bookingPopup").style.display = "none";
}

// fermer en cliquant dehors
window.onclick = function(event){
    let popup = document.getElementById("bookingPopup");
    if(event.target == popup){
        popup.style.display = "none";
    }
}
});