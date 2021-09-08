import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <>
                <h2 className="text-center mt-5">Films</h2>
                <div className="container mt-5 d-flex justify-content-center flex-wrap">
                    {this.props.movies.map(movie => (
                        <Link className="m-3" to={`/movie/${movie.id}`}>
                            <button>
                                <img src={movie.image} alt={movie.title} />
                            </button>
                        </Link>
                    ))}
                </div>
            </>
        )
    }
}