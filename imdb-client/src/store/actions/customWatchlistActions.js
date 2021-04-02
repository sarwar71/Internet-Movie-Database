import Axios from 'axios'
import * as Types from './types'

export const getCustomWatchList = (id) => dispatch => {
    Axios.get(`http://localhost:8000/api/get/custom/watchlist/${id}`)
        .then(response => {
            console.log(response)
            dispatch({
                type: Types.GET_CUSTOM_WATCHLIST,
                payload: {
                    customWatchlist: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const addCustomWatchList = (id, request, history) => dispatch => {

    Axios.post(`http://localhost:8000/api/add/custom/watchlist/${id}`, request)
        
        .then(response => {
            dispatch({
                type: Types.ADD_TO_CUSTOM_WATCHLIST,
                payload: {
                    customWatchlist: response.data
                }
            })
            history.push(`/user/custom/watchlist/details/${id}/${request.watchlist_title}`)
        })
        .catch(error => {
            console.log(error)
        })
}