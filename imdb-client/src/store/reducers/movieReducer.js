import * as Types from '../actions/types'

const init = {
    movies: {},
    paginationValues: {}
}

const movieReducer = (state = [], action) => {
    switch (action.type) {
        case Types.LOAD_MOVIES: {
            return action.payload.movies
        }

        default: return state
    }
}

export default movieReducer