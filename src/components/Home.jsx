import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Movies: [],
            movieId: [],
        }
    }

    componentDidMount = () => {
        fetch('./info.json')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    Movies: result
                })
            })
    }

    movieId = (e) => {
        this.setState({
            Movies: e.target.id,
        })
    }

    render() {
        console.log(this.state.Movies);
        return (
            <>
                {
                    this.state.Movies.map((movie, index) => {
                        return (
                            <button key={index}
                                className='d-block btn btn-outline-primary'
                                onClick={this.movieId}>
                                <li className='list-unstyled' >
                                    {movie.title}
                                </li>
                            </button>

                        )

                    })
                }
            </>
        )

    }
}
