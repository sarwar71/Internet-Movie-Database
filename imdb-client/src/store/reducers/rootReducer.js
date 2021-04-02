import { combineReducers } from 'redux'
import authReducer from './authReducer'
import movieReducer from './movieReducer'
import ratingReducer from './RatingReducer'
import watchlistReducer from './watchlistReducer'
import customWatchListReducer from './customWatchListReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    movies: movieReducer,
    ratings: ratingReducer,
    watchlist: watchlistReducer,
    customWatchLists: customWatchListReducer
})

export default rootReducer