import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadMovies } from '../store/actions/movieActions'
import { FaStar } from 'react-icons/fa'
import { logout } from '../store/actions/authActions'

class Ratings extends Component {

    state = {
        num_of_ratings: "",
        movie_id: "",
        user_id: "",
        hover: null
    }

    componentDidMount() {
        this.props.loadMovies()
    }
    render() {

        let { auth, movies } = this.props
        let user_id = auth.user.sub

        return (
            <div className="container">
                {
                    movies.map(movie => (

                        <p key={movie.id}>
                            {
                                movie.users.map(user => (
                                    user.id == user_id ?
                                        <p>
                                            {
                                                user.pivot.num_of_ratings != null ? <ul className='list-group'>
                                                    {
                                                        <li className='list-group-item'>

                                                            <p><h3>{movie.title}</h3><h3><FaStar className="star mr-2"
                                                                size={25} color="ffc107" />{user.pivot.num_of_ratings}</h3></p>

                                                            <img style={{ width: '20rem', height: '30rem' }} src={movie.banner} />

                                                            <p className="mt-3">{movie.movie_description}</p>

                                                            {
                                                                movie.directors.length == 1 ?
                                                                    <p className="font-weight-bold">Director: {
                                                                        movie.directors.map(director => (
                                                                            <Link to={`/director/details/${director.id}`} ><a> {director.director_name}, </a></Link>

                                                                        ))
                                                                    }</p> :
                                                                    <p className="font-weight-bold">Directors: {
                                                                        movie.directors.map(director => (
                                                                            <Link to={`/director/details/${director.id}`} ><a> {director.director_name}, </a></Link>

                                                                        ))
                                                                    }</p>
                                                            }

                                                            {
                                                                movie.writers.length == 1 ?
                                                                    <p className="font-weight-bold">Writer: {
                                                                        movie.writers.map(writer => (
                                                                            <Link to={`/writer/details/${writer.id}`}><a> {writer.writer_name}, </a></Link>
                                                                        ))
                                                                    }</p> :
                                                                    <p className="font-weight-bold">Writers: {
                                                                        movie.writers.map(writer => (
                                                                            <Link to={`/writer/details/${writer.id}`}><a> {writer.writer_name}, </a></Link>
                                                                        ))
                                                                    }</p>
                                                            }

                                                        </li>
                                                    }

                                                </ul> : null
                                            }
                                        </p> : null
                                ))
                            }

                        </p>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    movies: state.movies
})

export default connect(mapStateToProps, { loadMovies, logout })(Ratings)