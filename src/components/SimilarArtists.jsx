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
                <div className="row">  
                    <div className="col-md-3">
                        <ArtistCard artistImg = "https://via.placeholder.com/300" artistName="Similar Artist"/>
                    </div>
                    <div className="col-md-3">
                        <ArtistCard artistImg = "https://via.placeholder.com/300" artistName="Similar Artist"/>
                    </div>
                    <div className="col-md-3">
                        <ArtistCard artistImg = "https://via.placeholder.com/300" artistName="Similar Artist"/>
                    </div>
                    <div className="col-md-3">
                        <ArtistCard artistImg = "https://via.placeholder.com/300" artistName="Similar Artist"/>
                    </div>
                </div>    
            </>
        )
    }
}