import React, {Component} from 'react'

import '../assets/styles/containers/Artist.css'

import SearchBar from '../components/SearchBar.jsx'
import SimilarArtists from '../components/SimilarArtists'


export default class Artist extends Component {
    state={
        search: '',
        loading: false,
        error:false,
        data: {
            artists: [{}] 
            }
        }
    
        Searched = e =>{
        this.setState(
            {
                search: e.target.value
            }
            )
        }

        
        componentDidMount(){
            
            this.fetchData()
        } 

        componentDidUpdate(prevProps){
            if(this.props.location !== prevProps.location){
                this.fetchData()
                
            }
            
        }
        
        fetchData = async () =>{
            const artist = this.props.history.location.search.substr(1)
            const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
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
                <SearchBar 
                onChange = {this.Searched}
                search = {this.state.search}/>
                {this.state.loading && <p className="center">Loading...</p>}
                {this.state.error && <p className="center">Error: {this.state.errorMessage}</p>}
                <div className="container">
                    <div className="row center">
                    <div className="col-md-2"/>
                            
                        {this.state.data.artists.map((artist) =>{
                            return(
                                <div key={artist.idArtist} className="col-md-7">
                                    <img src={artist.strArtistThumb} alt={artist.strArtist}
                                    className="artist--img"/>
                                    <h3>{artist.strArtist}</h3>
                                    <p>{artist.strBiographyEN}</p>
                                </div>
                            )
                        })}
             
                    </div>
                </div>
               {/*  <div className="row">
                    <SimilarArtists data= {this.state.data.artist.similar.artist} />
                </div> */}
            </>
    );
    }
}