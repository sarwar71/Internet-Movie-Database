import Axios from 'axios'
import * as Types from './types'

export const loadMovies = () => dispatch => {
    Axios.get('http://localhost:8000/api/movies/get/all')
        .then(response => {
            dispatch({
                type: Types.LOAD_MOVIES,
                payload: {
                    movies: response.data,
                    //paginationValues: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

// export const loadMovie = (page) => dispatch => {
//     Axios.get('http://localhost:8000/api/movies/get/all?page='+page)
//         .then(response => {
//             dispatch({
//                 type: Types.LOAD_MOVIES,
//                 payload: {
//                     movies: response.data.data,
//                     paginationValues: response.data
//                 }
//             })
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }
