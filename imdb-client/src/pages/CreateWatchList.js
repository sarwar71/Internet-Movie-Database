import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addCustomWatchList } from '../store/actions/customWatchlistActions'

class CreateWatchList extends React.Component {
    state = {
        watchlist_title: "",
        watchlist_description: "",
        error: {}
    }

    // check error from backend
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
            return {
                error: nextProps.auth.error.errors
            };
        }
        return null;
    }

    changeHandler = event => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let { watchlist_title, watchlist_description } = this.state
        this.props.addCustomWatchList(
            this.props.match.params.user_id,
            { watchlist_title, watchlist_description },
            this.props.history
        )
    }

    render() {
        let { watchlist_title, watchlist_description, error } = this.state
        return (
            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <h1 className='text-center display-4'>Create a New List</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className='form-group'>
                            <label htmlFor='watchlist_title'> List Title </label>
                            <input
                                type="text"
                                className={error.watchlist_title ? "form-control is-invalid" : "form-control"}
                                placeholder="Enter Your List Title"
                                required
                                name='watchlist_title'
                                id='watchlist_title'
                                value={watchlist_title}
                                onChange={this.changeHandler}
                            />
                            {error.watchlist_title && (
                                <div className="invalid-feedback">{error.watchlist_title}</div>
                            )}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='watchlist_description'> List Description: </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your List Description"
                                name='watchlist_description'
                                id='watchlist_description'
                                value={watchlist_description}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <button className='btn btn-primary  my-3 d-block'>Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addCustomWatchList })(CreateWatchList)