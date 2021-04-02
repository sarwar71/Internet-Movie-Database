import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadMovies, loadMovie } from '../store/actions/movieActions'
import { AddToWatchList } from '../store/actions/watchlistActions'
import { logout } from '../store/actions/authActions'
import { FaStar } from 'react-icons/fa'

import { Button, Card, Container, Row } from 'react-bootstrap';
import Pagination from "react-js-pagination";

class Home extends Component {

    constructor() {
        super()
        this.state = {
            movie_id: "",
            user_id: "",
            currentUser: "",
            currentMovie: "",
            totalResults: 0,
            currentPage: 1,
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 5
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        
        this.props.loadMovies()
    }

    submitHandler = event => {
        event.preventDefault()
        let { user_id, movie_id } = this.state
        this.props.AddToWatchList(user_id, { movie_id })

        this.props.loadMovie(this.handlePageChange)

        this.setState({
            activePage: this.props.paginationValues.current_page,
            itemsCountPerPage: this.props.paginationValues.per_page,
            totalItemsCount: this.props.paginationValues.total
        })
        
    }

    handlePageChange(pageNumber) {
        this.props.loadMovie(pageNumber)
        
        this.setState({
            activePage: this.props.paginationValues.current_page,
            itemsCountPerPage: this.props.paginationValues.per_page,
            totalItemsCount: this.props.paginationValues.total
        })
    }

    render() {

        let { auth, movies } = this.props
        let user_id = auth.user.sub

        return (
            <Container>
                <Row className="d-flex justify-content-center">
                    {
                        movies.length > 0 ? <>
                            {
                                movies.map(movie => (
                                    <Card style={{ width: '25rem' }} bg="dark" className="mt-2 mr-2">

                                        <Link to={`/movie/details/${movie.id}`} ><Card.Img style={{ height: '37rem' }} variant="top" src={movie.banner} /></Link>
                                        {/* <Link to={`/movie/details/${movie.id}`} ><img src={movie.banner} /></Link> */}
                                        <Card.Body>
                                            <h4 className="text-white text-size" >
                                                <FaStar className="star mr-1"
                                                    size={20} color="ffc107" />

                                                {movie.avg_rating}</h4>

                                            <Link to={`/movie/details/${movie.id}`} ><Card.Title><h4 className="text-white">{movie.title}</h4></Card.Title></Link>

                                            <p>
                                                {
                                                    movie.users.map(user => (

                                                        user_id == user.id && user.pivot.watchlist == 1 ? <p>
                                                            {
                                                                this.state.currentUser = user.id,
                                                                this.state.currentMovie = movie.id
                                                            }

                                                        </p> : null

                                                    ))
                                                }
                                            </p>

                                            <form onSubmit={this.submitHandler}>
                                                {
                                                    (auth.isAuthenticated && this.state.currentUser == user_id && this.state.currentMovie == movie.id) ? <p>

                                                        <button variant="primary"
                                                            className="btn btn-primary  my-3 d-block"
                                                            onClick={() => this.setState({ movie_id: movie.id, user_id: user_id })}>
                                                            <span class="glyphicon glyphicon-ok mr-2"></span>
                                                    Watchlist
                                                    </button>

                                                    </p> :
                                                        auth.isAuthenticated ?
                                                            <button
                                                                className="btn btn-primary  my-3 d-block"
                                                                onClick={() => this.setState({ movie_id: movie.id, user_id: user_id })}>
                                                                <span class="glyphicon glyphicon-plus mr-2"></span>
                                                        Watchlist
                                                    </button> :

                                                            <Link to="/login"><button variant="primary"
                                                                className="btn btn-primary  my-3 d-block">
                                                                <span class="glyphicon glyphicon-plus mr-2"></span>
                                                        Watchlist
                                                    </button></Link>
                                                }
                                            </form>

                                            <Link to={`/movie/trailer/${movie.id}`} ><Button variant="secondary">
                                                <span class="glyphicon glyphicon-play mr-2"></span>
                                        Trailer
                                    </Button></Link>
                                        </Card.Body>

                                    </Card>
                                ))
                            }

                        </> : <p>Loading...</p>
                    }
                </Row>
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                    />
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    movies: state.movies.movies,
    paginationValues: state.movies.paginationValues
})

export default connect(mapStateToProps, { loadMovies, loadMovie, AddToWatchList, logout })(Home)