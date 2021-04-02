import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, } from 'react-router-dom'
import { loadMovies } from '../store/actions/movieActions'
import { FaStar } from 'react-icons/fa'
import { ratingMovie, loadRatings } from '../store/actions/ratingActions'
import { logout } from '../store/actions/authActions'

class MovieDetails extends Component {

    state = {
        num_of_ratings: "",
        movie_id: "",
        user_id: "",
        hover: null
    }

    componentDidMount() {
        this.props.loadMovies()

        this.props.loadRatings(this.props.match.params.movie_id)
    }

    submitHandler = event => {
        event.preventDefault()
        let { num_of_ratings, movie_id, user_id } = this.state

        console.log({ num_of_ratings, movie_id })
        this.props.ratingMovie(user_id, { num_of_ratings, movie_id })

        this.props.loadMovies()
    }

    render() {

        let { auth, movies, ratings } = this.props
        let movie_id = this.props.match.params.movie_id
        let user_id = auth.user.sub

        return (
            <div className="container">
                {
                    movies.map(movie => (

                        <p key={movie.id}>
                            {
                                movie_id == movie.id ? <ul className='list-group'>
                                    {
                                        <li className='list-group-item'>

                                            <h3 className="mt-1"> <FaStar className="star mr-2"
                                                size={30} color="ffc107" />
                                                {movie.avg_rating}</h3>

                                            {/* <FaStar className="star"
                                                                        size={35} color="ffc107" />
                                                {
                                                    ratings.map(rating => (
                                                        rating.pivot.user_id == user_id ?
                                                            rating.pivot.num_of_ratings : null
                                                    ))

                                                } */}

                                            <h3>{movie.title}</h3>

                                            <img style={{ width: '25rem', height: '40' }} variant="top" src={movie.banner} />

                                            <p className="mt-2">{movie.movie_description}</p>

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

                                            <form onSubmit={
                                                auth.isAuthenticated ?
                                                    this.submitHandler :
                                                    <Link to="/login"></Link>
                                            }>
                                                <div>
                                                    {[...Array(5)].map((star, i) => {
                                                        const ratingValue = i + 1;

                                                        return (
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    id="ratingValue"
                                                                    value="1"

                                                                    onClick={() => this.setState({
                                                                        num_of_ratings: ratingValue,
                                                                        movie_id: movie.id, user_id: user_id
                                                                    })}
                                                                />
                                                                <FaStar
                                                                    className="star"
                                                                    id="ratingValue"
                                                                    value="1"
                                                                    size={30}
                                                                    color={ratingValue <= (this.state.hover || this.state.num_of_ratings) ? "#ffc107" : "#e4e5e9"}
                                                                    onMouseEnter={() => this.setState({ hover: ratingValue })}
                                                                    onMouseLeave={() => this.setState({ hover: null })}
                                                                />
                                                            </label>
                                                        );
                                                    })}
                                                    <button
                                                        className='btn btn-primary  my-3 d-block'
                                                    >Rate This Movie
                                                </button>

                                                </div>
                                            </form>
                                        </li>
                                    }

                                </ul> : null
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
    movies: state.movies,
    ratings: state.ratings
})

export default connect(mapStateToProps, { loadMovies, ratingMovie, loadRatings, logout })(withRouter(MovieDetails))