const dataMovies = ["tt0120338","tt0100405","tt0107290","tt0119738","tt0099487","tt0110912","tt0109830","tt0133093","tt0099785",
"tt0099653", "tt0088247", "tt0088763","tt0082971","tt0081505","tt0083866","tt0087332","tt0094721","tt0096895","tt0095016","tt0092099", "tt0068646", "tt0070047", "tt0077631", "tt0073195", "tt0066921", "tt0076759", "tt0078748", "tt0078346", "tt0079501"];
// function filter80Movies(movies){
//   const m80= movies.filter(m80s=> (m80s.Year <= 1990));
//   return m80;
// };
function filter90Movies(movies){
 const m90= movies.filter(m90s=> (m90s.Year >= 1990));
 return m90;
};
// console.log(filter90Movies(movies));
function filter80Movies(movies){
 const m80= movies.filter(m80s=> (m80s.Year <1990 && m80s.Year >=1980));
 return m80;
};
function filter70Movies(movies){
 const m70= movies.filter(m70s=> (m70s.Year <1980 && m70s.Year >=1970));
 return m70;
};
//

function filterGenre(movies, genero){
     const arrType = [];
     for(let i = 0; i < movies.length; i++){
         if((movies[i].Genre.indexOf(genero)) > -1) {
             arrType.push(movies[i]);
           }
}
 return arrType;
};
//
const movies=[];
for (let i=0; i < dataMovies.length; i++){
 fetch("http://www.omdbapi.com/?i=" + dataMovies[i] + "&apikey=5fc360b0").then((data)=>{
   return data.json();
 }).then((dataAsJSON)=>{
   movies.push(dataAsJSON);
   filter90Movies(movies);
   filter80Movies(movies);
   filter70Movies(movies);
   filterGenre(movies);
 });
};
