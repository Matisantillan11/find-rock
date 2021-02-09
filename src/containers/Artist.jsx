import React, {Component} from 'react'

import '../assets/styles/containers/Artist.css'

import SearchBar from '../components/SearchBar.jsx'
import SimilarArtists from '../components/SimilarArtists'


export default class Artist extends Component {
    state={
        search: '',
        API_KEY: '1a3e0cd8ac7a846ec661fc5a998e7496',
        loading: false,
        error:false,
        data: {
                artist: {
                    image:[
                        {"#text": "", size: ""},
                        {"#text": "", size: ""},
                        {"#text": "", size: ""},
                        {"#text": "", size: ""},
                        {"#text": "", size: ""}
                        
                    ],
                    similar:{
                        artist: [
                            {
                                name: "",
                                url: "",
                                image: [
                                    {"#text": ""},
                                    {"#text": ""},
                                    {"#text": ""},
                                    {"#text": ""},
                                    {"#text": ""}
                                ]
                            }
                        ]
                    },
                    bio:{
                        summary: ""
                    }
                }
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
            const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${this.state.API_KEY}&format=json`
            this.setState({loading: true})
            const response = await fetch(url)
            const data = await response.json()
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
                <SearchBar 
                onChange = {this.Searched}
                search = {this.state.search}/>
                {this.state.loading && <p className="center">Loading...</p>}
                {this.state.error && <p className="center">Error: {this.state.errorMessage}</p>}
                <div className="container">
                    <div className="row center">
                    <div className="col-md-2"/>
                            <div className="col-md-7">
                                <img src={this.state.data.artist.image[3]["#text"]} alt={this.state.data.artist.name}
                                className="artist--img"/>
                                <h3>{this.state.data.artist.name}</h3>
                                <p>{this.state.data.artist.bio.summary}</p>
                            </div>   
                    </div>
                </div>
                <div className="row">
                    <SimilarArtists data= {this.state.data.artist.similar.artist} />
                </div>
            </>
    );
    }
}