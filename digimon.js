fetch("https://digimon-api.vercel.app/api/digimon")
    .then(respuestaEncriptada => {
        respuestaEncriptada.json().then(digimons => {
            var digimonsContainer = document.querySelector("#digimons");

            for(var i = 0; i < digimons.length; i++){
                var digimon = digimons[i]; 
                var digimonDiv = document.createElement("tr");
                digimonDiv.innerHTML = ` <td> <a href="digimonBuscado.html?name=${digimon.name}"> <img src="${digimon.img}" height="50"> </a></td> 
                <td> <a href="digimonBuscado.html?name=${digimon.name}"> ${digimon.name} </a> </td>
                <td><a href="digimonBuscado.html?name=${digimon.name}">${digimon.level} </a></td> `
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
