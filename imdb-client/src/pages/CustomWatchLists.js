import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCustomWatchList } from '../store/actions/customWatchlistActions'
import { Button, Card, Container, Row } from 'react-bootstrap';

class CustomWatchLists extends Component {

    state = {
        user_id: "",
    }

    componentDidMount() {

        this.props.getCustomWatchList(this.props.match.params.user_id)
    }
    render() {

        let { auth, customWatchLists } = this.props
        let user_id = auth.user.sub
        return (
            <Container className="d-block justify-content-center">
                <h3>Your Lists</h3>
                <div className="row">
                    <div className="col">
                        {
                            customWatchLists. length > 0?
                            customWatchLists.map(customWatchList => (
                                <p>
                                    <ul className='list-group'>
                                        {
                                            <li className='list-group-item'>
                                                <Link to={`/user/custom/watchlist/details/${auth.user.sub}/${customWatchList.watchlist_title}`}>
                                                    <h4>{customWatchList.watchlist_title}</h4>
                                                </Link>
                                                <p>{customWatchList.movies.length} Titles</p>
                                            </li>
                                        }
                                    </ul>
                                </p>
                            )):<p> You Have No List</p>
                        }
                    </div>
                    <div className="col">
                    <Link to={`/user/custom/watchlist/create/${user_id}`} ><button className="btn btn-primary">CREATE A NEW LIST</button></Link>
                    </div>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    movies: state.movies,
    customWatchLists: state.customWatchLists
})

export default connect(mapStateToProps, { getCustomWatchList })(CustomWatchLists)