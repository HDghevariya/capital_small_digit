function capitalLatter() {
    let latter = document.getElementById('h1').value;

    if (latter.length !== 1) {
        document.getElementById('h2').value = "Enter 1 character only";
        return;
    }

    if (!isNaN(latter)) {
        document.getElementById('h2').value = "digit";
    } else if (latter === latter.toUpperCase() && latter !== latter.toLowerCase()) {
        document.getElementById('h2').value = "Uppercase";
    } else if (latter === latter.toLowerCase() && latter !== latter.toUpperCase()) {
        document.getElementById('h2').value = "lowercase";
    } else {
        document.getElementById('h2').value = "symbol or other character";
    }
}

let ans = document.getElementById('btn');
ans.addEventListener("click", function() {
    capitalLatter();
});
