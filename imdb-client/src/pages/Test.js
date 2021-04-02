import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddToWatchList } from '../store/actions/watchlistActions'
import { logout } from '../store/actions/authActions'
import { FaStar } from 'react-icons/fa'

import { Button, Card, Container, Row } from 'react-bootstrap';
import Pagination from "react-js-pagination";

class Home extends Component {

    constructor() {
        super()
        this.state = {
            movies: {},
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

        fetch("http://localhost:8000/api/movies/get/all").then((data) => {
            data.json().then((response) => {

                this.setState({
                    movies: response.data,
                    activePage: response.current_page,
                    itemsCountPerPage: response.per_page,
                    totalItemsCount: response.total
                })
            })
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let { user_id, movie_id } = this.state
        this.props.AddToWatchList(user_id, { movie_id })

        fetch("http://localhost:8000/api/movies/get/all").then((data) => {
            data.json().then((response) => {
                this.setState({
                    movies: response.data,
                })
            })
        })

    }

    handlePageChange(pageNumber) {

        fetch('http://localhost:8000/api/movies/get/all?page=' + pageNumber).then((data) => {
            data.json().then((response) => {

                this.setState({
                    movies: response.data,
                    activePage: response.current_page,
                    itemsCountPerPage: response.per_page,
                    totalItemsCount: response.total
                })
            })
        })
    }

    render() {

        let { auth } = this.props
        let movies = this.state.movies
        let user_id = auth.user.sub

        return (
            <Container >
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
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { AddToWatchList, logout })(Home)