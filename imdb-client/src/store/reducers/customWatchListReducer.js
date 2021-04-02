import * as Types from '../actions/types'

const customWatchListReducer = (state = [], action) => {
    switch (action.type) {
        
        case Types.GET_CUSTOM_WATCHLIST: {
            return action.payload.customWatchlist
        }
        
        default: return state
    }
}

export default customWatchListReducer