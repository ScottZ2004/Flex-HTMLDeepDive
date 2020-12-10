function setupFotoslider(){
    
    fotonummer = 0;
    fotobreedte = 400; // Pas dit aan naar de breedte van jouw foto's

    fotoslider = document.getElementById('foto-slider');
    let volgendeKnop = document.getElementById('volgende-btn');
    let vorigeKnop = document.getElementById('vorige-btn');
    aantalfotos = fotoslider.children.length;
    volgendeKnop.addEventListener("click", volgendeFoto);
}
setupFotoslider();

function volgendeFoto(){
    alert('volgende geklikt');
}

let fotonummer, fotobreedte, aantalfotos, fotoslider;