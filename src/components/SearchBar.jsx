import React, {Component} from 'react'
import {Link, useHistory} from 'react-router-dom'
import logo from '../assets/images/logo.svg'

import '../assets/styles/components/SearchBar.css'

class SearchBar extends Component{
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push(`/search?${this.props.search}`)

    }


    render(){
        
        return(
            <>
            
                <div className="row">
                    <div className="col-md-2">
                        <Link to="/">
                            <img className="searchBar--logo"src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <form 
                        className="form-inline"
                        onSubmit={this.handleSubmit}>
                            <div className="search form-group mx-sm-3 md-2">
                                <input 
                                onChange={this.props.onChange}
                                type="text" 
                                value={this.props.search}
                                placeholder="Buscar una banda..."/>
                            </div>
                        </form>
                    </div>
                </div>
                <hr/>
            </>
        )
    }
}

export default SearchBar