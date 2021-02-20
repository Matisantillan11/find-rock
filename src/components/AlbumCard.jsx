import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../assets/styles/components/ArtistCard.css'

class AlbumCard extends Component{
    render(){
        return(
            <div className="col-3">
                <Link to="/">
                    <div 
                    className="artistCard"
                    >
                        <img 
                        className = "artistCard--img"
                        src={this.props.albumImg}
                        alt={this.props.albumName}
                        />
                        <p 
                        className="artistCard--name">
                            {this.props.albumName}
                        </p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default AlbumCard;