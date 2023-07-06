

const contenedor = document.getElementById('container');


function addCaptus() {

    const captus = document.createElement('div');
    captus.classList.add('captus');
    contenedor.appendChild(captus);

}

addCaptus();