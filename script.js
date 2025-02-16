document.getElementById("getPrice").addEventListener("click", function() {
    let crypto = document.getElementById("crypto").value;
    let url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            document.getElementById("price-result").innerHTML = 
                `${crypto.toUpperCase()} Price: $${response[crypto].usd}`;
        }
    };
    xhr.send();
});
