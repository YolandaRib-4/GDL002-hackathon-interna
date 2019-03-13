window.data = {};

// Funcion filtro de tipos pkm
 data.typeFilter  = (data, type) => {
  let filteredPokemon = data.filter(pokemon => {
   const index = pokemon.type.indexOf(type);
   return index != -1;
  });
  return filteredPokemon;
};

// Funcion filtro por debilidades
data.weaknessesFilter = (data, weakness) => {
  let filteredPokemon = data.filter(pokemon => {
    const index = pokemon.weaknesses.indexOf(weakness);
    return index != -1;
  });
  return filteredPokemon;
};

// Funcion de ordenado alfabéticamente A- Z
data.orderByName = (data) => {
  let orderedData = data.sort ((pokemon_1, pokemon_2) => {
    if (pokemon_1.name > pokemon_2.name) {
      return 1;
    }
    else if (pokemon_1.name < pokemon_2.name) {
      return -1;
    }
    else{
    return 0;
  }
  });
  return orderedData;
};

//Funcion para el porcentaje
data.porcentaje = (cantidadpkm, total) => {
  let porc_pokemones = (cantidadpkm * 100) / total;
  porc_pokemones = 'El porcentaje de pokemones de este tipo es: ' + porc_pokemones.toFixed(2) + '%';
  return porc_pokemones;
};

