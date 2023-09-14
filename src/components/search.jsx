import React, { useState } from 'react';


export const Search = ({ avisarAlPadre }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        avisarAlPadre(searchValue);
    };

    return (
        <form role='form' className='lala'>
            <input
            role='input'
            type='text'
            placeholder='Busca películas o series'
            className='lele'
            value={searchValue}
            onChange={handleSearch}
            />
            <button className='lili' type='submit' onClick={handleClick}>
                Buscar
                <img
                src='https://www.google.com/search?q=imagenes+lupa+busqueda&rlz=1C5CHFA_enEC1058EC1059&oq=imagenes+lupa+busqueda&aqs=chrome..69i57j33i160l2.83473j0j15&sourceid=chrome&ie=UTF-8#vhid=TGPuViPHFBGU4M&vssid=l'
                alt='Imagen de busqueda'
                className='lololo'
                />
            </button>
        </form>
    )
}


/*<input type="text" placeholder='busca tu peli' value={movieName} onChange={(e) => {
                setMovieName(e.target.value)}} />
                {movies?.map((movie, index) => {
                    return(
                        <h2 key={index}>{movie.Title}</h2>
                    )
                })}*/
