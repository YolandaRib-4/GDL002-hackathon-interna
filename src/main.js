
//Template para imprimir de manera dinámica dentro de html
function moviePosterTemplate(movies){
	return `
		<div class="flip-card">
			<div class="flip-card-inner">
				<div class="movies-flip-front">
					<img class="poster" src="${movies.Poster}">
				</div>
				<div class="movies-flip-back">
					<p>${movies.Title} / ${movies.Year}</p>
					<p class="sinopsis">Plot: ${movies.Plot} <br> Duration: ${movies.Runtime}</p>
				</div>
			</div>
		</div>
`; 
}

function moviePoster (data){
	document.getElementById("movie-list").innerHTML = `
	${data.map(moviePosterTemplate).join("")}`;
}


//Función para filtrar por década
function showFilter(decade){
	let divMoviesList = document.getElementById('movie-list');
	divMoviesList.innerHTML = "";
	const typeResult =filterDecade(movies, parseInt(decade.value));
	moviePoster(typeResult);
	return typeResult;
}

const m60s = document.getElementById("1960");
m60s.addEventListener("click", function () {
	showFilter(m60s);});

const m70s = document.getElementById("1970");
m70s.addEventListener("click", function () {
	showFilter(m70s);});

const m80s = document.getElementById("1980");
m80s.addEventListener("click", function () {
	showFilter(m80s);});

const m90s = document.getElementById("1990");
m90s.addEventListener("click", function () {
	showFilter(m90s);});

//Función general para filtrar por género
function showFilterGenre(genero){
	let divMoviesList = document.getElementById('movie-list');
	divMoviesList.innerHTML = "";
	const typeResult =filterGenre(movies, genero.value);
	moviePoster(typeResult);
	return typeResult;
}

//Interacción con botones de género que llaman a la función 
const comedy = document.getElementById("Comedy");
comedy.addEventListener("click", function () {
	showFilterGenre(comedy);});

const drama = document.getElementById("Drama");
drama.addEventListener("click", function () {
	showFilterGenre(drama);});

const sciFi = document.getElementById("Sci-Fi");
sciFi.addEventListener("click", function () {
	showFilterGenre(sciFi);});


//Función para buscar
function showFilterSearch(query){
	let divMoviesList = document.getElementById('movie-list');
	divMoviesList.innerHTML = "";
	const name = document.getElementById("miBusqueda").value;
	const typeResult =filterItems(movies, name);
	moviePoster(typeResult);
	return typeResult;
}

const search = document.getElementById("search-button");
search.addEventListener("click", function () {
	showFilterSearch(search);});
