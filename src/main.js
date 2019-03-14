
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
function showFilter(movies){
	let divMoviesList = document.getElementById('movie-list');
	divMoviesList.innerHTML = "";
	const typeResult =filter70Movies(movies);
	moviePoster(typeResult);
	return typeResult;
}

const m70s = document.getElementById("d70s");
m70s.addEventListener("click", function () {
	showFilter(movies);});

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