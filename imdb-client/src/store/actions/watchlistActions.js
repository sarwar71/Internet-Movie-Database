import Axios from 'axios'
import * as Types from './types'

export const AddToWatchList = (id, request) => dispatch => {
    Axios.post(`http://localhost:8000/api/movie/add/watchlist/${id}`, request)
        .then(response => {
            dispatch({
                type: Types.ADD_TO_WATCHLIST,
                payload: {
                    watchlist: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const getWatchList = () => dispatch => {
    Axios.get('http://localhost:8000/api/movie/get/watchlists')
        .then(response => {
            dispatch({
                type: Types.GET_WATCHLIST,
                payload: {
                    watchlist: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}
