
let serverOptions = document.getElementById('select_')

function myFunction() {
    let x = document.getElementById("myNumber").value;

    serverOptions.addEventListener("change", function server() {
            if (serverOptions.value === '1') {
                let a = x * 0.14;
                let b = Math.round(a * 100) / 100;
                document.getElementById("priceForAde1na").value = b
                return b
            } else if (serverOptions.value === '2') {
                let a = x * 0.23;
                let b = Math.round(a * 100) / 100;
                document.getElementById("priceForAde1na").value = b
                return b
            } else if (serverOptions.value === '3') {
                let a = x * 1.15;
                let b = Math.round(a * 100) / 100;
                document.getElementById("priceForAde1na").value = b
                return b
            } else if (serverOptions.value === '4') {
                let a = x * 0.0046;
                let b = Math.round(a * 100) / 100;
                document.getElementById("priceForAde1na").value = b
                return b
            }
        })
}

myFunction()



