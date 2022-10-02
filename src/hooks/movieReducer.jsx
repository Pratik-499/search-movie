const ActionTypes = {
    'FETCH_LOADING': 'FETCH_LOADING',
    'FETCH_ERROR': 'FETCH_ERROR',
    'FETCH_DATA': 'FETCH_DATA'
};

const INITIAL_STATE = {
    movieList: [],
    error: null, 
    loading: true
};

const MovieReducer = (state, {type, payload}) => {
    switch(type){
        case ActionTypes.FETCH_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case ActionTypes.FETCH_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }

        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                error: null,
                loading: false,
                movieList: payload
            }

        default:
            return state;
    }
}


export {
    ActionTypes,
    INITIAL_STATE,
    MovieReducer
}