import React, { useEffect, useRef, useState } from 'react';

//Components
import Layout from './components/Layout.jsx'
import Heading from './components/Heading.jsx'
import MovieList from './components/MovieList.jsx'
import MovieItem from './components/MovieItem.jsx'
import Filter from './components/Filter.jsx'

const App = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter]= useState(false)
  

  const fetchMovies = () => {
    setLoading(true);

    return fetch('http://localhost:8000/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);


  function handleCheck(){
      setFilter(prevFilter => !prevFilter ? true : false);
  }
  
  let newMovies;
  if(filter){
    newMovies= movies.map((item)=> item ).sort((a, b) => b.year -  a.year)
  }


  console.log('filter', filter);
  console.log('movies', movies);
  

  return (
    <Layout>
      <Heading/>

      <Filter onCheck={handleCheck} />
      <MovieList loading={loading}>
        {!filter && movies.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
        {filter && newMovies.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
      </MovieList>
    </Layout>
  );
};

export default App;
