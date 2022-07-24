
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
}
window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}
document.querySelector('.button_mobile').onclick = function (){
    document.querySelector('.header__list').classList.toggle('active')
    document.querySelector('.button_mobile').classList.toggle('active')
}
