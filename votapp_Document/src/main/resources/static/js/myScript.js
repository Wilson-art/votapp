var vectorCandidatos = new Array(4);

vectorCandidatos[0] = 0;
vectorCandidatos[1] = 0;
vectorCandidatos[2] = 0;
vectorCandidatos[3] = 0;

function voto(candidato) {
    vectorCandidatos[candidato] = vectorCandidatos[candidato] + 1;
    alert("Gracias Por su Voto (ツ)");
}

function estadistica() {
    let total = vectorCandidatos[0] + vectorCandidatos[1] + vectorCandidatos[2] + vectorCandidatos[3];
    let porCan1 = (vectorCandidatos[0] / total) * 100;
    let porCan2 = (vectorCandidatos[1] / total) * 100;
    let porCan3 = (vectorCandidatos[1] / total) * 100;
    let porCan4 = (vectorCandidatos[1] / total) * 100;
   
  
    let nodoParrafo = document.createElement('p');
    let nodoParrafo2 = document.createElement('p');
    let nodoParrafo3 = document.createElement('p');
    let nodoParrafo4 = document.createElement('p');
    
    let texto = document.createTextNode("◼ Votos Candidato N°1 ► " + vectorCandidatos[0] + " ► Porcentaje ► " + porCan1 + "%");
    let texto2 = document.createTextNode("◼ Votos Candidato N°2 ► " + vectorCandidatos[1] + " ► Porcentaje ► " + porCan2 + "%");
    let texto3 = document.createTextNode("◼ Votos Candidato N°3 ► " + vectorCandidatos[2] + " ► Porcentaje ► " + porCan3 + "%");
    let texto4 = document.createTextNode("◼ Votos Candidato N°4 ► " + vectorCandidatos[3] + " ► Porcentaje ► " + porCan4 + "%");
    

    nodoParrafo.appendChild(texto);
    nodoParrafo2.appendChild(texto2);
    nodoParrafo3.appendChild(texto3);
    nodoParrafo4.appendChild(texto4);

    let elementoDiv = document.getElementById('verEst');
    elementoDiv.appendChild(nodoParrafo);
    elementoDiv.appendChild(nodoParrafo2);
    elementoDiv.appendChild(nodoParrafo3);
    elementoDiv.appendChild(nodoParrafo4);
    
    
    

    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
    const etiquetas = ["Candidato N°1", "Candidato N°2", "Candidato N°3", "Candidato N°4"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVotos = {
        label: "Votos Obtenidos",
        data: [vectorCandidatos[0], vectorCandidatos[1], vectorCandidatos[2], vectorCandidatos[3]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1, // Ancho del borde
    };
    new Chart($grafica, {
        type: 'line', // Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datosVotos,
                        // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
            },
        }
    });
    
    

}