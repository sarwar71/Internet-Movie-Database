import * as Types from '../actions/types'

const ratingReducer = (state = [], action) => {
    switch (action.type) {
        case Types.RATINGS_MOVIE: {
            return action.payload.ratings
        }

        case Types.GET_RATINGS: {
            return action.payload.ratings
        }
        
        default: return state
    }
}


export default ratingReducer