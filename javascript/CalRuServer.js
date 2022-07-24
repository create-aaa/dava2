
let serverOptions = document.getElementById('select_')

function myFunction() {
    let x = document.getElementById("myNumber").value;

    serverOptions.addEventListener("change", function server() {
        if (serverOptions.value === '1') {
            let a = x * 0.15;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        } else if (serverOptions.value === '2') {
            let a = x * 0.10;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        } else if (serverOptions.value === '3') {
            let a = x * 0.65;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        } else if (serverOptions.value === '4') {
            let a = x * 0.0050;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '5') {
            let a = x * 0.0050;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '6') {
            let a = x * 0.050;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '7') {
            let a = x * 0.0085;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '8') {
            let a = x * 0.0085;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '9') {
            let a = x * 0.10;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '10') {
            let a = x * 0.10;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '11') {
            let a = x * 0.10;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '12') {
            let a = x * 0.10;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }else if (serverOptions.value === '13') {
            let a = x * 0.0050;
            let b = Math.round(a * 100) / 100;
            document.getElementById("priceForAde1na").value = b
            return b
        }
    })
}
myFunction()