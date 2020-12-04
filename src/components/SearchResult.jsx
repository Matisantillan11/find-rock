import React, { Component } from 'react'

import ArtistCard from './ArtistCard.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
class SearchResult extends Component {
    state = {
        loading: false,
        error:false,
        API_KEY: '1a3e0cd8ac7a846ec661fc5a998e7496',
        data: {
            similarartists:{
                artist: []
            }
        }
    }
    componentWillReceiveProps(e){
        const artist = e.search
        this.fetchData(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist}&api_key=${this.state.API_KEY}&format=json`)
    }

    fetchData = async url =>{
        this.setState({loading: true})
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if(data.error){
            this.setState({
                loading: false,
                error: true,
                errorMessage : data.message
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
                {this.state.error && <p className="center">Error: {this.state.errorMessage}</p>}
                <div className="container">
                    <h1>{this.props.search}</h1>
                    <div className="row">
                        {this.state.data.similarartists.artist.map( (artist, i) =>{
                            return <ArtistCard key={i} artistName={artist.name} artistImg = {artist.image[2]["#text"]}/>   
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default SearchResult