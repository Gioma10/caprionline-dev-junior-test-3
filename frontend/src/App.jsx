import React, { useEffect, useRef, useState } from 'react';

//Components
import Layout from './components/Layout.jsx'
import Heading from './components/Heading.jsx'
import MovieList from './components/MovieList.jsx'
import MovieItem from './components/MovieItem.jsx'
import Filters from './components/Filters.jsx'

const App = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCheck, setFilterCheck]= useState(false)
  const [filterRating, setFilterRating]= useState(false)
  const [moviesRate, setMoviesRate]= useState([])
  const rating= useRef('')
  

  const fetchMovies = () => {
    setLoading(true);

    return fetch('http://localhost:8000/movies')
      .then(response => response.json())
      .then(data => {
        if(!filterCheck && !filterRating){
          setMovies(data);
        }
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, [filterCheck, filterRating]);


  // Checkbox recent
  function handleCheck(){
      setFilterCheck(prevFilter => !prevFilter ? true : false);
      setMovies(prevMovies => prevMovies.sort((a, b) => b.year - a.year))
  }

  // Input rating
  function handleRate(){
    if(rating.current.value !== ''){
      setMoviesRate(movies.map((movie)=>movie).filter((movie) => Number(movie.rating) === Number(rating.current.value)))
      setFilterRating(true);
    }else {
      setFilterRating(false)
    }
  }
  // console.log('rate', movies);
  // console.log('rating', rating.current.value);
  // console.log('rateMovies', rateMovies);
  // console.log('filter rate', filterRating);

  

  return (
    <Layout>
      <Heading/>

      <Filters 
        onCheck={handleCheck} 
        onRate={handleRate}
        ref={rating} />
      <MovieList noMovie={moviesRate.length === 0} loading={loading}>
        {!filterRating && movies.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
        {filterRating && moviesRate.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
        {moviesRate.length === 0 && <p>Non ci sono film con questa valutazione</p>}
      </MovieList>
    </Layout>
  );
};

export default App;
