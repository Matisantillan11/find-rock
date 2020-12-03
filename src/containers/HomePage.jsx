import React, { Component } from 'react'

import '../assets/styles/containers/HomePage.css'

import logo from '../assets/images/logo.svg'

export default class extends Component {
    render(){

        return(
            <>
                <div className="container ">
                    <div className="row centered">
                            <div className="col-md-6 center">
                                <img src={logo} alt="logo" id='logo'/>
                                <form 
                                onSubmit={this.submitted}
                                className="form-inline">
                                    <div className="search">
                                        <input 
                                        onChange={this.props.onChange}
                                        type="text"
                                        value={this.props.search}
                                        placeholder="Buscar una banda..."/>
                                    </div>
                                </form>
                                <div className="actions">
                                    <button className="btng">
                                        Search Artists
                                    </button>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </>
        )
    }
}