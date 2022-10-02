import NoImagePlaceholder from '../assets/images/No-Image-Placeholder.png';

const MovieCard = ({movie}) => {
    const {Title, Poster} = movie;
    return (
        <figure className="moviecard">
            <div className='img'>
                <img src={(Poster && Poster === 'N/A') ? NoImagePlaceholder : Poster} alt={Title} />
            </div>
            <figcaption>{Title}</figcaption>
        </figure>
    )
}

export default MovieCard;