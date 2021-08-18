import React, { Component } from 'react'
import ArtistCard from './ArtistCard.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
class SearchResult extends Component {
    
    state = {
        loading: false,
        error:false,
        API_KEY: '523532',
        data: {          
            artists: []
        }
    }

    

    componentWillReceiveProps(e){
        const artist = e.search
        this.fetchData(`https://theaudiodb.com/api/v1/json/${this.state.API_KEY}/search.php?s=${artist}`);
        
    }

    fetchData = async url =>{
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()
        
        if(data.artists === null){
            this.setState({
                loading: false,
                error: true,
                errorMessage : 'Artist not found'
            })
        }
        else{
            
            this.setState({
                error: false,
                loading: false,
                data: data
            })
        }
    }
    

    render(){
        return (
            <>  
                {this.state.loading && <p className="center">Loading...</p>}
                {this.state.error ? <p className="center">Error: {this.state.errorMessage}</p> :
                
                <div className="container">
                    <div className="artistCard_container">
                        {this.state.data.artists.map( (artist) =>{
                            return <ArtistCard key={artist.idArtist} artistName={artist.strArtist} artistImg = {artist.strArtistThumb}/>   
                        })} 
                    </div>
                </div>
                
                }
                
            </>
        )
    }
}

export default SearchResult;