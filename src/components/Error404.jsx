import React, { Component } from 'react'

export default class Error404 extends Component {
    render() {
        return (
            <div>
                <p className="text-danger">La page demandée n'existe pas.</p>
            </div>
        )
    }
}