import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadMovies } from '../store/actions/movieActions'

class WriterDetails extends Component {

    state = {
        flag: true
    }

    componentDidMount() {
        this.props.loadMovies()
    }

    render() {

        let { movies } = this.props

        let writer_id = this.props.match.params.writer_id
        let flag = this.state.flag

        return (
            <div className="container">
                <ul className='list-group'>
                    {
                        movies.map(function (movie, index) {
                            if (flag) {
                                return (
                                    movie.writers.map(writer => (
                                        <p key={writer.id}>
                                            {
                                                (writer_id == writer.id) ? <ul className='list-group'>
                                                    {
                                                        <li className='list-group-item'>
                                                            <h3>{writer.writer_name}</h3>
                                                            <img style={{ width: '25rem', height:'40rem' }} src={writer.writer_image} />
                                                            <p className="mt-3">{writer.writer_description}</p>
                                                            <p className="font-weight-bold">Born: {writer.writer_birth}</p>
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
    movies: state.movies
})

export default connect(mapStateToProps, { loadMovies })(WriterDetails)