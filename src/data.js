// Son los ids de las peliculas localizadas en la pagina Imdb
const dataMovies = ["tt0120338","tt0100405","tt0107290","tt0119738","tt0099487","tt0110912","tt0109830","tt0133093",
"tt0099785","tt0099653", "tt0088247", "tt0088763","tt0082971","tt0081505","tt0083866","tt0087332","tt0094721",
"tt0096895","tt0095016","tt0092099","tt0068646", "tt0070047", "tt0077631", "tt0073195", "tt0066921", "tt0076759",
"tt0078748", "tt0078346", "tt0079501","tt0054215","tt0059742","tt0061722","tt0054698","tt0056869","tt0034583","tt0031381"];


// Esta funcion permite filtrar las peliculas por decada
// Movies es nuestra base de datos obtenida con fetch y
// decade se tomara mediante el main con la ayuda del radio que elija el usuario
function filterDecade(movies,decade){
 const mDecade= movies.filter(m70s=> (m70s.Year <= decade+9 && m70s.Year >= decade));
   return mDecade;
};

// Esta funcion permite filtrar las peliculas por genero
// genero se tomara mediante el main con la ayuda del radio que elija el usuario
function filterGenre(movies, genero){
     const arrType = [];
     for(let i = 0; i < movies.length; i++){
         if((movies[i].Genre.indexOf(genero)) > -1) {
             arrType.push(movies[i]);
           }
}
 return arrType;
};
//La funcion se utiliza en la barra de busqueda para que el usuario pueda encontrar el titulo de alguna pelicula
function filterItems(movies,query) {
return movies.filter(function(el) {
    return el.Title.toLowerCase().indexOf(query.toLowerCase()) > -1;
})
};
//engloba la base de datos en la variable movies y les da la promeso a cada funcion utilizada
const movies=[];
for (let i=0; i < dataMovies.length; i++){
 fetch("http://www.omdbapi.com/?i=" + dataMovies[i] + "&apikey=5fc360b0").then((data)=>{
   return data.json();
 }).then((dataAsJSON)=>{
   movies.push(dataAsJSON);
   filterGenre(movies);
   filterDecade(movies);
   filterItems(movies);
 });
};
