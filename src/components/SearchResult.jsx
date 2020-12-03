import React, { Component } from 'react'

import ArtistCard from './ArtistCard.jsx'
import artists from '../test.json'

import "bootstrap/dist/css/bootstrap.min.css";
export default class extends Component {
    render(){
        return (
            <>  
            
                <div className="container">
                    <h1>{this.props.search}</h1>
                    <div className="row">
                        {artists.artist.map( (artist, i) =>{
                            return <ArtistCard key={i} artistName={artist.name} artistImg = {artist.image}/>   
                        })}
                    </div>
                </div>
            </>
        )
    }
}