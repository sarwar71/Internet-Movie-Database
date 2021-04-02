import * as Types from '../actions/types'

const watchlistReducer = (state = [], action) => {
    switch (action.type) {
        
        case Types.ADD_TO_WATCHLIST: {
            return action.payload.watchlist
        }
        
        case Types.GET_WATCHLIST: {
            return action.payload.watchlist
        }
        
        default: return state
    }
}

export default watchlistReducer