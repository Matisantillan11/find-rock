import React, {Component} from 'react'

import '../assets/styles/containers/Artist.css'

import SearchBar from '../components/SearchBar.jsx'
import SimilarArtists from '../components/SimilarArtists'

export default class extends Component {
    state={
    search: ''
    }

    Searched = e =>{
    this.setState(
        {
            search: e.target.value
        }
    )
    }
    render(){
        return (
            <>
                <SearchBar 
                onChange = {this.Searched}
                search = {this.state.search}/>
                <div className="container">
                    <div className="row center">
                    <div className="col-md-2"/>
                            <div className="col-md-7">
                                <img src="https://lh3.googleusercontent.com/proxy/ovQzDBolB4-56K_TYivt5aypavaKLAAJxNVgZ3LWzdIoKCPmHgIY8N9yDZbE9UdUlAMrC7scE-cqf2xJWnC0SaoCQBoJxDZVS8nfYFhviAf2c22zLagM1k7z2as" alt="Cerati"
                                className="artist--img"/>

                                <h3>Gustavo Cerati</h3>

                                <p>Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de 1959-ibidem, 4 de septiembre de 2014)3​4​5​ fue un músico, cantautor, compositor y productor discográfico argentino que obtuvo reconocimiento internacional por haber sido el líder de la banda de rock Soda Stereo. Es considerado uno de los músicos más importantes, populares e influyentes del rock latinoamericano.</p>
                            </div>   
                    </div>
                </div>
                <div className="row">
                    <SimilarArtists />
                </div>
            </>
    );
    }
}