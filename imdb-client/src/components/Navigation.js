import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadMovies } from '../store/actions/movieActions'
import { logout } from '../store/actions/authActions'

class Navigation extends Component {

    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false
        }
    }

    componentDidMount() {
        this.props.loadMovies()
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

    render() {

        let { auth } = this.props

        return (
            <div >
                <nav className="navbar navbar-light bg-dark">
                    <div className="col-2"></div>
                    <div className="col-1">
                        <Link to="/"><button className="btn btn-warning">IMDB</button></Link>
                    </div>
                    <div className="dropdown col-5">
                        <input

                            className="form-control dropdown-toggle"
                            aria-label="Search"
                            id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            type="text"
                            placeholder="Search Movie"

                            onChange={(event) => this.search(event.target.value)}
                        />
                        <div className="dropdown-menu">
                            {
                                this.state.searchData ?
                                    <div>
                                        {
                                            this.state.searchData.map((item) =>
                                                <div className="list-group-item">
                                                    <Link to={`/movie/details/${item.id}`} >
                                                        <div className="d-flex">
                                                            <img style={{ width: '6rem', height: '8rem' }} variant="top" className="d-block" src={item.banner} />
                                                            <div>
                                                                <p className="font-weight-bold mx-2">{item.title}</p>
                                                                <p className="mx-2">{item.year}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
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
                    <div className="col-1">
                        {auth.isAuthenticated ?
                            <Link to="/movie/watchlist"><button
                                className="btn btn-primary  my-3 d-block ">
                                <span className="glyphicon glyphicon-bookmark mr-2"></span>
                            Watchlist</button>
                            </Link> :
                            <Link to="/login"><button
                                className="btn btn-primary  my-3 d-block ">
                                <span className="glyphicon glyphicon-bookmark mr-2"></span>
                            Watchlist</button>
                            </Link>
                        }
                    </div>

                    <div className="col-1 center">
                        <div className="dropdown">

                            {
                                this.props.auth.isAuthenticated ?
                                    <p>
                                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="glyphicon glyphicon-user mr-2"></span>
                                            {auth.user.first_name} {auth.user.last_name}</a>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link to="/movie/watchlist"><a className="dropdown-item" href="#">Your Watchlist</a></Link>
                                            <Link to="/movie/ratings"><a className="dropdown-item" href="#">Your Ratings</a></Link>
                                            <Link to={`/user/custom/watchlist/${auth.user.sub}`}><a className="dropdown-item" href="#">Your Lists</a></Link>
                                            <a
                                                className='dropdown-item'
                                                onClick={() => this.props.logout(this.props.history)}
                                            >Sign Out</a>
                                        </div>

                                    </p> :
                                    <Link to='/login'><a className='btn btn-success'> Sign In </a></Link>
                            }

                        </div>

                    </div>
                    <div className="col-2"></div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { loadMovies, logout })(withRouter(Navigation))