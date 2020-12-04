import React, { Component } from 'react'
import ArtistCard from './ArtistCard.jsx'

export default class extends Component{
    render(){
        return(
            <>
                <div className="row center margins50">
                    <div className="col-md-12">
                        <h4>Similar Artist</h4>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-center">  
                        {this.props.data.slice(0,4).map((artist, i) =>{
                            return(
                                <ArtistCard artistImg = {artist.image[3]["#text"]} artistName={artist.name} key={i}/>
                                )
                        })}
                       
                    </div>    
                </div>
            </>
        )
    }
}