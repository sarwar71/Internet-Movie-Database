import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadMovies } from '../store/actions/movieActions'

class DirectorDetails extends Component {

    state = {
        flag: true
    }

    componentDidMount() {
        this.props.loadMovies()
    }

    render() {

        let { movies } = this.props

        let director_id = this.props.match.params.director_id
        let flag = this.state.flag

        return (
            <div className="container">
                <ul className='list-group'>
                    {
                        movies.map(function (movie, index) {
                            if (flag) {
                                return (
                                    movie.directors.map(director => (
                                        <p key={director.id}>
                                            {
                                                (director_id == director.id) ? <ul className='list-group'>
                                                    {
                                                        <li className='list-group-item'>
                                                            <h3>{director.director_name}</h3>
                                                            <img style={{ width: '25rem', height:'40rem' }} src={director.director_image} />
                                                            <p className="mt-3">{director.director_description}</p>
                                                            <p className="font-weight-bold">Born: {director.director_birth}</p>
                                                            {flag = false}

                                                        </li>
                                                    }</ul> : null
                                            }
                                        </p>
                                    ))
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    movies: state.movies
})

export default connect(mapStateToProps, { loadMovies })(DirectorDetails)