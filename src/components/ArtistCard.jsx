import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../assets/styles/components/ArtistCard.css'
export default class ArtistCard extends Component{
    render(){
        return(
            <div className="col-3">
                <Link to={`/artist?${this.props.artistName}`}>
                    <div 
                    className="artistCard"
                    >
                        <img 
                        className = "artistCard--img"
                        src={this.props.artistImg}
                        alt={this.props.artistName}
                        />
                        <p 
                        className="artistCard--name">
                            {this.props.artistName}
                        </p>
                    </div>
                </Link>
            </div>
        )
    }
}
