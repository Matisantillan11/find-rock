import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg'

import '../assets/styles/components/SearchBar.css'

export default class extends Component{
    
    submitted = e =>{
        e.preventDefault()
        alert(`${this.props.search}`)
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
                        /* onSubmit={this.submitted} */
                        className="form-inline">
                            <div className="search form-group mx-sm-3 md-2">
                                <input 
                                onChange={this.props.onChange}
                                className="form-control"
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