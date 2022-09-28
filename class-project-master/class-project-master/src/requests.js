//const APIKEY = "143bebe5e619280a37d188e20fe3a5ad";
//const API_KEY="e59270432f221c66766c4131b533bc57"
//const API_KEY = "2d480ccdc537e82d39e759a7afcd0fac";
const API_KEY = "62e9afa9b26ec1658e4f7c572663a19b";

const requests = {
    fetchTreding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetFlixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
}

export default requests;