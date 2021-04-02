import Axios from 'axios'
import jwtDecode from 'jwt-decode';

import * as Types from './types'
import setAuthToken from '../../utils/setAuthToken'

export const register = (user, history) => dispatch => {
    Axios.post('http://localhost:8000/api/user/register', user)
        .then(response => {
            try {
                dispatch({
                    type: Types.SET_USER,
                    payload: {
                        user: {},
                        error: {}
                    }
                })
                history.push('/login')
            } catch (error) {

            }
        })
        .catch(error => {
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
}

export const login = (user, history) => dispatch => {
    Axios.post('http://localhost:8000/api/user/login', user)
        .then(response => {

            let token = response.data.access_token
            localStorage.setItem('auth_token', token)
            setAuthToken(token)
            let decode = jwtDecode(token)

            if (response.data.user) {
                let first_name = response.data.user.first_name
                let last_name = response.data.user.last_name

                decode['first_name'] = first_name
                decode['last_name'] = last_name
            }

            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: decode
                }
            })
            history.push('/')
        })
        .catch(error => {
            console.log(error)
            try {
                dispatch({
                    type: Types.USERS_ERROR,
                    payload: {
                        error: error.response.data
                    }
                })
            } catch (error) {

            }
        })
}

export const logout = history => {

    localStorage.removeItem('auth_token')
    history.push('/login')
    return {
        type: Types.SET_USER,
        payload: {
            user: {}
        }

    }

}