import React, {useState, useEffect} from 'react';
export default function Home() {
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=6913b240`)
        .then((r) => r.json())
        .then((r) => setMovies(r.Search))
        .catch((e) => console.log(e))
    }, [movieName])

    return(
        <section>
            <h2>HOLI</h2>
            <input type="text" placeholder='busca tu peli' value={movieName} onChange={(e) => {
            setMovieName(e.target.value)}} />
            {movies?.map((movie, index) => {
                return(
                    <h2 key={index}>{movie.Title}</h2>
                )
            })}
        </section>
    )
}