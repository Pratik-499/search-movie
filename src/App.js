import React, { useEffect, useReducer, useState } from 'react';
import Searchbar from './components/Searchbar';
import Movies from './components/Movies';
import Header from './components/Header';
import MovieContextComp from './context-api/MovieContext';
import { API } from './API/api';
import { debounce } from './utils/utils';
import { ActionTypes, INITIAL_STATE, MovieReducer } from './hooks/movieReducer';
import "./App.css";

const App = () => {
    const DEFAULT_TERM = 'step';
    const [searchTerm, setSearchTerm] = useState('');
    // Using use Reducer
    const [movieObj, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
    // Using use State
    // const [movieObj, setMovieList] = useState({movieList: [], loading: true, error: false});

    const handleSearch = evt => {
        let term = evt.target.value;
        setSearchTerm(term);

        if(!term){
            term = DEFAULT_TERM;
        } else {
            if(term.length < 3) return;
        }

        const searchDebounce = debounce(s_term => {
            fetchMovies(s_term || DEFAULT_TERM)
        });

        searchDebounce(term);
    }

    const fetchMovies = async q => {
        // setMovieList({
        //     ...movieObj,
        //     error: false,
        //     loading: true
        // });

        dispatch({type: ActionTypes.FETCH_LOADING});

        try{
            const res = await fetch(`${API.base_url}&s=${q}`);
            const data = await res.json();
            console.log('res', data);
            if(data.Error){
                // setMovieList({
                //     ...movieObj,
                //     error: data.Error
                // });

                dispatch({
                    type: ActionTypes.FETCH_ERROR,
                    payload: data.Error
                });
            }
            if(data.Search){
                // setMovieList({
                //     ...movieObj,
                //     loading: false,
                //     error: false,
                //     movieList: data.Search
                // });

                dispatch({
                    type: ActionTypes.FETCH_DATA,
                    payload: data.Search
                });
            }
        } catch(err){
            // setMovieList({
            //     ...movieObj,
            //     loading: false,
            //     error: true
            // });

            dispatch({
                type: ActionTypes.FETCH_ERROR,
                payload: err
            });
        }
    }

    // eslint-disable-next-line
    useEffect(() => {
        fetchMovies(searchTerm || DEFAULT_TERM);
    }, []);

    return (
        <>
            <Header />
            <main>
                <MovieContextComp contextValue={{
                    searchTerm,
                    movieObj, 
                    handleSearch
                }}>
                    <Searchbar />
                    <Movies />
                </MovieContextComp>
            </main>
        </>
    )
}

export default App;