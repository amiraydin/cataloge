import React, { Component } from 'react';
import movies from "../movies.json";

export default class Movie extends Component {
    /*constructor() {
        super();
        this.state = {
          movie: null
        } 
      }
    
    componentDidMount() {
        fetch("../movies.json")
        .then(res => res.json())
        .then(movies => this.setState({
            movie: movies.find(movie => movie.id === parseInt(this.props.match.params.id))
        }));
    }*/


    render() {
        const movie = movies.find(movie => movie.id === parseInt(this.props.match.params.id))
        //const {movie} = this.state;
        return (
            <div>
                {movie ? (
                    <div className="container mt-5 d-flex justify-content-center">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={movie.image} alt={movie.title} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.description}</p>
                                <footer class="blockquote-footer">{movie.director}</footer>
                                <p className="card-text">Acteurs</p>
                                <ul>
                                    {movie.stars.map(star => (
                                        <li>{star}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p classNameName="text-danger">Le film n'existe pas.</p>
                )}
            </div>
        );
    }
}