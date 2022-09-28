import React, { useEffect,useState } from 'react'
import Header from '../Header/Header';
import './Home.css';
import Row from '../Row/Row';
import requests from '../../requests';
import Banner from '../Banner/Banner'
//import Nav from './Nav'
//import Featured from "../Featured/Featured";
//import requests from "../../requests";
//import Row from "../Row/Row";
import {Link} from 'react-router-dom';
import {BiPlay} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
import axios from 'axios'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

/*const apikey="728f9df764c8ad666b734447bd8039ed"
const url="https://api.themoviedb.org/3"
const imgurl="https://image.tmdb.org/t/p/original"
const upcoming="upcoming"
const nowplaying="now_playing"
const popular="popular"
const toprated="top_rated"


 const Card=({img})=>(
 <img className='card' src={img} alt="cover" />
)

const Row=(
  {
    title,
    arr=[]
  }
  )=>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
    {
      arr.map((item,index)=>(
        <Card key={index} img={`${imgurl}/${item.poster_path}`}  />
      ))
    }
  
    </div>
  </div>
)
const Home = () => {

  const [upcomingmovies,setupcomingmovies]=useState([])
  const [nowplayingmovies,setnowplayingmovies]=useState([])
  const [popularmovies,setpopularmovies]=useState([])
  const [topratedmovies,settopratedmovies]=useState([])
  const [getGenre,setGenre]=useState([])
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(item?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(
    ()=>{
      const fetchupcoming=async()=>{
        const {data : {results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}&page=2`)
        setupcomingmovies(results)
      }

      const fetchnowplaying=async()=>{
        const {data : {results}}=await axios.get(`${url}/movie/${nowplaying}?api_key=${apikey}`)
        setnowplayingmovies(results)
      }

      const fetchpopular=async()=>{
        const {data : {results}}=await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
        setpopularmovies(results)
      }

      const fetchtoprated=async()=>{
        const {data : {results}}=await axios.get(`${url}/movie/${toprated}?api_key=${apikey}`)
        settopratedmovies(results)
      }

      const getAllGenre=async()=>{
        const {data : {genres}}=await axios.get(`${url}/genre/movie/list?api_key=${apikey}`)
        setGenre(genres)
      }

      getAllGenre()
      fetchupcoming()
      fetchnowplaying()
      fetchpopular()
      fetchtoprated()
    },[]
  )

  return (
    
    <section className='home'>
      <Header/>
      <div className="banner" style={{backgroundImage:popularmovies[0]?`url(${`${imgurl}/${popularmovies[0].poster_path}`})`:"black"}}>
       {popularmovies[0] && (<h1>{popularmovies[0].title}</h1>)}
       {popularmovies[0] && (<p>{popularmovies[0].overview}</p>)}
       <div>
           <button><BiPlay></BiPlay>PLay</button>
           <button>My List <AiOutlinePlus></AiOutlinePlus></button>
       </div>
      </div>

      <Row title={"NETFLIX UPCOMING"} arr={upcomingmovies}/>
      <Row title={"NETFLIX POPULAR"} arr={popularmovies}/>
      <Row title={"TOP RATED"} arr={topratedmovies}/>
      <Row title={"NOW PLAYING"} arr={nowplayingmovies}/>

      <div className='genreBox'>
           {getGenre.map((item)=>(
                <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
           ))}
      </div>
    </section>
  )*/

  function Home() {
    return (
    <div class="Home">
      <Header/>
      <Banner/>;
      <div id="original">
        <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetFlixOriginals} />
      </div>
      <Row title = "Trending Now" fetchUrl = {requests.fetchTreding}/>
      <div id="top">
         <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      </div>
      <div id="movies">
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
      <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
      </div>
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
      <Row title = "Mystery and Thriller" fetchUrl = {requests.fetchMystery}/>
      <Row title = "Science Fiction" fetchUrl = {requests.fetchSciFi}/>
      <Row title = "Western Culture" fetchUrl = {requests.fetchWestern}/>
      <Row title = "Animation" fetchUrl = {requests.fetchAnimation}/>
      <div id="tv shows">
      <Row title = "Tv shows" fetchUrl = {requests.fetchTV}/>
      </div>
      </div>
    )
}

export default Home;