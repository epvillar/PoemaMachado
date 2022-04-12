// lorem text
const text = [
  `Todo pasa y todo queda,
  pero lo nuestro es pasar,
  pasar haciendo caminos,
  caminos sobre el mar.`,
  
  `Nunca persequí la gloria,
  ni dejar en la memoria
  de los hombres mi canción;
  yo amo los mundos sutiles,
  ingrávidos y gentiles,
  como pompas de jabón.`,
  
  `Me gusta verlos pintarse
  de sol y grana, volar
  bajo el cielo azul, temblar
  súbitamente y quebrarse…`,
  
  `Nunca perseguí la gloria.`,
  
  `Caminante, son tus huellas
  el camino y nada más;
  caminante, no hay camino,
  se hace camino al andar.`,
  
  `Al andar se hace camino
  y al volver la vista atrás
  se ve la senda que nunca
  se ha de volver a pisar.`,
  
  `Caminante no hay camino
  sino estelas en la mar…`,
  
  `Hace algún tiempo en ese lugar
  donde hoy los bosques se visten de espinos
  se oyó la voz de un poeta gritar
  «Caminante no hay camino,
  se hace camino al andar…»`,
  
  `Golpe a golpe, verso a verso…`,
  
  `Murió el poeta lejos del hogar.
  Le cubre el polvo de un país vecino.
  Al alejarse le vieron llorar.
  «Caminante no hay camino,
  se hace camino al andar…»`,
  
  `Golpe a golpe, verso a verso…`,
  
  `Cuando el jilguero no puede cantar.
  Cuando el poeta es un peregrino,
  cuando de nada nos sirve rezar.
  «Caminante no hay camino,
  se hace camino al andar…»`,
  
  `Golpe a golpe, verso a verso.`,
];

const form1 = document.querySelector('.lorem-form');
const amount1 = document.getElementById('amount');
const result1 = document.querySelector(".lorem-text");

form1.addEventListener('submit', function(e) {
  e.preventDefault();
  const value1 = parseInt(amount1.value);

  if (isNaN(value1) || value1 < 0 || value1 > text.length) {
    result1.innerHTML = `<p class="result">${text[0]}</p>`;
  } else {
  let tempText = text.slice(0, value1);
  tempText = tempText.map(function(item){
      return `<p class="result">${item}</p>`;
  })
    .join("");
  result1.innerHTML = tempText;
  }
});

