import { useEffect, useState } from 'react';
import './App.css'
import MovieCard from './MovieCard';

// const API_URL = 'https://www.omdbapi.com/?s=Batman&apikey=39cf862d';
const API_URL =' http://www.omdbapi.com?apikey=39cf862d';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    // const searchMovies = async (title) => {
    //     const response = await fetch(API_URL);
    //     const data = await response.json();
    //     setMovies(data.Search);

    // }
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    }
  

    useEffect(() => {
        searchMovies("Batman");
    }, []);
    return (

        <div className="app">
            <h1>MoviesLand</h1>
            <div className="search">
                <input
                    placeholder='Search for movies'
                    value={searchTerm}

                    onChange={(e) => { setSearchTerm(e.target.value)


                    }} />
                <i className="fa-sharp fa-solid fa-magnifying-glass" onClick={() => searchMovies(searchTerm)

                }></i>

            </div>
            {
                movies?.length > 0
                    ? (

                        <div className="container">
                           {movies.map((movie)=>(
                        
                                <MovieCard movie={movie}/>
                        

                          ) )}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                            </div>
                            )
            }

          </div>
    );
}
                       
    
                      

    

    



export default App;

// http://www.omdbapi.com/?i=tt3896198&apikey=39cf862d

// const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();