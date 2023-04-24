var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var digimonName = urlParams.get("name");

fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
    .then(respuestaEncriptada => {
        respuestaEncriptada.json().then(digimons => {
            var digimonsContainer = document.querySelector("#digimon");

            for(var i = 0; i < digimons.length; i++){
                var digimon = digimons[i]; 
                var digimonDiv = document.createElement("div");
                digimonDiv.innerHTML = `<img src="${digimon.img}">   
                <p>${digimon.name}</p>
                <p>${digimon.level}</p>`
                digimonsContainer.append(digimonDiv);
            }
        })
    });

    var form = document.querySelector("#form");
    form.addEventListener('submit', function(event){
        event.preventDefault();
        var input = document.querySelector("#buscarDigimon");
        window.location.href=`digimonBuscado.html?name=${input.value}`;
    });    