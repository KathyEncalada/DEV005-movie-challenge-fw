import React, {useState, useEffect} from 'react';
import { Footer } from '../components/footer.jsx';
import { Search } from '../components/search.jsx';
import { GetData } from '../API/data.jsx';

export default function Home() {
    const [searchKey, setSearchKey] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [recommendations, setRecommendations] = useState({ movies: [], series: [] });

    useEffect (() => {
        const fetchData = async () => {
            if (showSearchResults){
                const movieResults = await GetData('');
                const seriesResult = await GetData('');
                setRecommendations({ movies: movieResults.results.slice(0 , 5), series: seriesResult.results.slice(0, 5) });
            }else{
                const movieData = await GetData('');
                const seriesData = await GetData('');
                setRecommendations({movies: movieData.results.slice(0, 5), series: seriesData.results.slice(0, 5) });
            }
        };

        fetchData();
    }, [searchKey, showSearchResults]);

    const handleSearchKey = (key) => {
        setSearchKey(key);
        setShowSearchResults(true);
    };

    return(
        <React.Fragment>
            <Search avisarAlPadre={handleSearchKey}/>
            <section>
                <h2>HOLI</h2>
            </section>
            < Footer/>
        </React.Fragment>
    );
};


/*export default function Home() {
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=6913b240`)
        .then((r) => r.json())
        .then((r) => setMovies(r.Search))
        .catch((e) => console.log(e))
    }, [movieName])

    return(
        <React.Fragment>
            <Search/>
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
            < Footer/>
        </React.Fragment>
    )
}*/