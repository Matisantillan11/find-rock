import React, {Component} from 'react'

import logo from '../assets/images/logo.svg'

import '../assets/styles/components/searchBar.css'

export default class extends Component{
    
    eventSearch = e =>{
        console.log(e.target.value)
    }

    submitted = e =>{
        e.preventDefault()
        alert(e.target.value)
    }

    render(){
        
        return(
            <>
                
                    <div className="row">
                        <div className="col-md-2">
                            <img className="searchBar--logo"src={logo} alt="logo"/>
                        </div>
                        <div className="col-md-4">
                            <form 
                            onSubmit={this.submitted}
                            className="form-inline">
                                <div className="form-group mx-sm-3 md-2">
                                    <input 
                                    onChange={this.eventSearch}
                                    className="form-control"
                                    type="text" 
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