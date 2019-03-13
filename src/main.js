
let card = document.querySelector('#pkList');
let typeFilterEl = document.querySelector('#type_filter');
let porcEl = document.querySelector('#percent')
let weaknessesFilterEl = document.querySelector('#weaknesses_filter');
let sortAscEl = document.querySelector('#sort-asc');
let sortDesEl = document.querySelector('#sort-des');


// Para mostrar el filtro 
typeFilterEl.addEventListener('change', () => {
  let _data = data.typeFilter(POKEMON.pokemon, typeFilterEl.value); //aquí filtro
  let porcentaje = data.porcentaje(_data.length, POKEMON.pokemon.length);  // aqui mide el array
  porcEl.innerHTML = porcentaje;
  renderer(_data, card);
 });


// para mostrar el ordenado
sortAscEl.addEventListener('click', () => {
  let dataSort= data.orderByName(POKEMON.pokemon);
  renderer(dataSort, card);
});

sortDesEl.addEventListener('click', () => {
  let dataSort = data.orderByName(POKEMON.pokemon).reverse();
  renderer(dataSort, card);
});

// Para mostrar filtro debilidades
weaknessesFilterEl.addEventListener('change', () => {
  let dataSorted = data.weaknessesFilter(POKEMON.pokemon, weaknessesFilterEl.value);
  renderer(dataSorted, card);
});


//Template para tarjetitas
function pokemonTemplate(singlePokemon){
  let pokemonCardTemplate = `
  <div class="singlePokemon">
    <h1 class="namepk">${singlePokemon.num} ${singlePokemon.name}</h1>
    <img src="${singlePokemon.img}">
    <div class="overlay translucent"></div>
    <div class="overlay">
      <dl>
        <dt>Peso:</dt>
        <dd>${singlePokemon.weight}</dd>
        <dt>Altura:</dt>
        <dd>${singlePokemon.height}</dd>
        <dt>Tipo:</dt>
        <dd>${singlePokemon.type.join(', ')}</dd>
        <dt>Debilidades:</dt>
        <dd>${singlePokemon.weaknesses.join(', ')}</dd>
      </dl>
    </div>      
  </div>
  `;
  return pokemonCardTemplate;
}

 // Funcion  para mostrar las tarjetitas
const renderer = (data, htmlElement) => {
  let html = '';
  for(let singlePokemon of data) {
    html = html + pokemonTemplate(singlePokemon); //html + Es para que junte las tarjetitas cada vez q se cumpla el ciclo, para que las vaya sumando en pantalla
  }        
  htmlElement.innerHTML = html;
};
renderer(POKEMON.pokemon, card);

