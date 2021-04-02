import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCustomWatchList, addCustomWatchList } from '../store/actions/customWatchlistActions'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'

class CustomWatchListsDetails extends Component {

    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false,
            user_id: '',
            movie_id: ''
        }
    }

    componentDidMount() {

        this.props.getCustomWatchList(this.props.match.params.user_id)
    }

    search(key) {

        fetch("http://localhost:8000/api/movies/search/" + key).then((data) => {
            data.json().then((response) => {
                if (response.length > 0) {
                    this.setState({ noData: false, searchData: response })

                }
                else {
                    this.setState({ noData: true, searchData: null })
                }

            })
        })
    }

    submitHandler = (event) => {
        //event.preventDefault()

        console.log(event)

        let watchlist_title = this.props.match.params.watchlist_title
        let movie_id = event

        this.props.addCustomWatchList(
            this.props.match.params.user_id,
            { watchlist_title, movie_id },
            this.props.history
        )
        this.props.getCustomWatchList(this.props.match.params.user_id)
    }

    render() {

        let { auth, customWatchLists } = this.props
        let user_id = auth.user.sub
        return (
            <Container className="d-block justify-content-center">
                <div className="row d-block justify-content-center">
                    <div className="dropdown col-6 my-2 ">
                        
                        <input
                            className="form-control  dropdown-toggle"
                            aria-label="Search"
                            id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            type="text"
                            placeholder="Add a movie to this list"

                            onChange={(event) => this.search(event.target.value)}
                            
                        />
                        
                        <div className="dropdown-menu">
                            {
                                this.state.searchData ?
                                    <div>
                                        {
                                            this.state.searchData.map((item) =>
                                                <div className="list-group-item">
                                                    <p onClick={() => this.submitHandler(item.id)}>
                                                    <div className="d-flex">
                                                            <img style={{ width: '6rem', height: '8rem' }} variant="top" className="d-block" src={item.banner} />
                                                            <div>
                                                                <p className="font-weight-bold mx-2">{item.title}</p>
                                                                <p className="mx-2">{item.year}</p>
                                                            </div>
                                                        </div>
                                                    </p>

                                                </div>)
                                        }
                                    </div>
                                    : null
                            }
                            {
                                this.state.noData ? <div> No Data Found </div> : null
                            }
                        </div>
                    </div>

                </div>
                {
                    customWatchLists.length > 0?
                    customWatchLists.map(customWatchList => (
                        <p>
                            <div className="col-4">
                        <h3>{customWatchList.watchlist_title}</h3>
                        <p>{customWatchList.watchlist_description}</p>
                        
                    </div>
                            
                            {
                                customWatchList.movies.map(movie => (
                                    <p>
                                        {
                                            this.props.match.params.watchlist_title == customWatchList.watchlist_title ? <ul className='list-group'>
                                                {
                                                    <li className='list-group-item'>
                                                        <div className="row">
                                                            <div className="col-2">
                                                                <img style={{ width: '12rem', height: '18' }} variant="top" src={movie.banner} />
                                                            </div>
                                                            <div className="col-10 ml-auto">
                                                                <h3>{movie.title}</h3>
                                                                <h4 className="mt-1"> <FaStar className="star mr-2"
                                                                    size={20} color="ffc107" />
                                                                    {movie.avg_rating}</h4>
                                                                <p className="mt-2">{movie.movie_description}</p>
                                                            </div>

                                                        </div>
                                                    </li>
                                                }
                                            </ul> : null
                                        }
                                    </p>
                                ))
                            }
                        </p>
                    )) : null
                }
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    movies: state.movies,
    customWatchLists: state.customWatchLists
})

export default connect(mapStateToProps, { getCustomWatchList, addCustomWatchList })(CustomWatchListsDetails)