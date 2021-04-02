import React, { Component } from 'react'
import ReactPlayer from "react-player"

class MovieTrailers extends Component {
    render() {
        let movie_id = this.props.match.params.movie_id
        return (

            <div className="container">
                {
                    (() => {
                        if (movie_id == 1) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=8ugaeA-nMTc"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 2) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=nS8aKzfIyGY"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 3) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=Ke1Y3P9D0Bc"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 4) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=tmeOjFno6Do"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 5) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=JerVrbLldXw"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 6) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=7SlILk2WMTI"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 7) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=oxy8udgWRmo"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 8) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=eOrNdBpGMv8"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 9) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=JOddp-nlNvQ"
                                    controls
                                />
                            )
                        }
                        else if (movie_id == 10) {
                            return (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=npvJ9FTgZbM"
                                    controls
                                />
                            )
                        }
                    })

                        ()}

            </div>
        )
    }
}

export default MovieTrailers