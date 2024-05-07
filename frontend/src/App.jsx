import React, { useEffect, useRef, useState } from 'react';

//Components
import Layout from './components/Layout.jsx'
import Heading from './components/Heading.jsx'
import MovieList from './components/MovieList.jsx'
import MovieItem from './components/MovieItem.jsx'
import FilterCheck from './components/FilterCheck.jsx';
import FilterRating from './components/FilterRating.jsx';
import FilterGender from './components/FilterGender.jsx'

const App = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters]= useState({
    check: false,
    rate: false,
    gender: false,
  })
  const [moviesRate, setMoviesRate]= useState([])
  const rating= useRef('')
  const gender= useRef('')
  

  const fetchMovies = () => {
    setLoading(true);

    return fetch('http://localhost:8000/movies')
      .then(response => response.json())
      .then(data => {
        if(!filters.check && !filters.rate){
          setMovies(data);
        }
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, [filters]);


  // Checkbox recent
  function handleCheck(){
      setFilters(prevFilters => {
        return {
          ...prevFilters,
          check: prevFilters.check ? false : true,
        }
      });
      setMovies(prevMovies => prevMovies.sort((a, b) => b.year - a.year))
      setMoviesRate(prevMovies => prevMovies.sort((a, b) => b.year - a.year))
  }

  // Input rating
  function handleRate(){
    if(rating.current.value !== ''){
      setMoviesRate(movies.map((movie)=>movie).filter((movie) => Number(movie.rating) === Number(rating.current.value)))
      setFilters(prevFilters => {
        return {
          ...prevFilters,
          rate: true,
        }
      });
    }else {
      setFilters(prevFilters => {
        return {
          ...prevFilters,
          rate: false,
        }
      });
    }
  }
  // Input gender
  function handleGender(){  
    setFilters(prevFilters => {
      return {
        ...prevFilters,
        gender: true,
      }
    });
  }

  console.log('movies', movies);
  

  return (
    <Layout>
      <Heading/>
      <div className="my-10 flex justify-between gap-5">
          <FilterCheck onCheck={handleCheck} />
          <FilterRating ref={rating} onRate={handleRate} />
          <FilterGender onGender={handleGender} ref={gender} />
      </div>
      <MovieList noMovie={moviesRate.length === 0 && filters.rate} loading={loading}>
        {!filters.rate && movies.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
        {filters.rate && moviesRate.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
        { moviesRate.length === 0 && <p>Non ci sono film</p>}
      </MovieList>
    </Layout>
  );
};

export default App;
