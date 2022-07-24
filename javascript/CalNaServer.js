// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show")
// }
// window.onclick = function(event) {
//     if (!event.target.matches(".dropbtn")) {
//
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show')
//             }
//         }
//     }
// }
// document.querySelector('.button_mobile').onclick = function () {
//     document.querySelector('.header__list').classList.toggle('active')
//     document.querySelector('.button_mobile').classList.toggle('active')
// }

let serverOptions = document.getElementById('select_')

function myFunction() {
    let x = document.getElementById("myNumber").value;

    serverOptions.addEventListener("change", function server() {
        if (serverOptions.value === '1') {
            let a = x * 0.30;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        } else if (serverOptions.value === '2') {
            let a = x * 0.31;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        } else if (serverOptions.value === '3') {
            let a = x * 0.0019;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        } else if (serverOptions.value === '4') {
            let a = x * 0.0019;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '5') {
            let a = x * 0.0028;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '6') {
            let a = x * 0.0070;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '7') {
            let a = x * 0.100;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }
    })
}

myFunction()