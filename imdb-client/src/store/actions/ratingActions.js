import Axios from 'axios'
import * as Types from './types'

export const ratingMovie = (id, request) => dispatch => {
    Axios.post(`http://localhost:8000/api/movie/rating/${id}`, request)
        .then(response => {
            dispatch({
                type: Types.RATINGS_MOVIE,
                payload: {
                    ratings: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const loadRatings = (id) => dispatch => {
    Axios.get(`http://localhost:8000/api/movie/get/rating/${id}`)
        .then(response => {
            dispatch({
                type: Types.RATINGS_MOVIE,
                payload: {
                    ratings: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}