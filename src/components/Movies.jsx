import { useContext } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context-api/MovieContext";
import styled from "styled-components";
import loaderImgSrc from '../assets/images/ripple-loader.svg';

const Movies = () => {
    const { movieObj } = useContext(MovieContext);

    const getJSX = () => {
        const { loading, error, movieList } = movieObj;
        if(loading && !error){
            return (
                <div className="loading span-all">
                    <img src={loaderImgSrc} alt="loading" />
                </div>
            )
        }

        if(error && !loading){
            return (
                <div className="error span-all">{movieObj.error}</div>
            )
        }

        if(movieList.length > 0){
            return (
                movieList.map(m => <MovieCard key={m.imdbID} movie={m} />)
            )
        }
    }

    return (
        <MovieSection>
            <div className="container">
                <div className="grid">{getJSX()}</div>
            </div>
        </MovieSection>
    )
}

const MovieSection = styled.section`
    .grid {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 15px;
        grid-row-gap: 50px;

        @media (min-width: 600px){
            grid-template-columns: repeat(3,1fr);
        }

        @media (min-width: 1200px){
            grid-template-columns: repeat(4,1fr);
        }

        .span-all {
            grid-column: span 4;
        }
        .error, .loading {
            text-align: center;
            font-size: 1.5rem;
            text-transform: capitalize;
            display: flex;
            justify-content: center;
            align-content: center;
        }

        .moviecard {
            display: flex;
            flex-direction: column;
            width: 100%;
            row-gap: 15px;

            .img {
                padding-bottom: 100%;
                position: relative;
    
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    position: absolute;
                    left: 0;
                }
            }
    
            figcaption {
                font-size: 1.2rem;
                text-align: center;
                padding: 8px 0;
                background: #f2f2f2;
            }
        }
    }
`

export default Movies;