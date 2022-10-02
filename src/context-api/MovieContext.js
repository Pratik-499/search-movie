import { createContext } from 'react';

const MovieContext = createContext({});
const MovieContextComp = ({contextValue, children}) => {

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
}

export {
    MovieContext
}

export default MovieContextComp;