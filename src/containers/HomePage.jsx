import React, { Component } from 'react'

import '../assets/styles/containers/HomePage.css'

import logo from '../assets/images/logo.svg'

class HomePage extends Component {
    state = {
        search: ''
    }

    submitted = (e) =>{
        e.preventDefault()
        this.props.history.push(`/search?${this.state.search}`)
    }

    onChange = (e) =>{
        this.setState({
            search: e.target.value
        })
    }

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
                                        onChange={this.onChange}
                                        type="text"
                                        value={this.props.search}
                                        placeholder="Buscar una banda..."/>
                                    </div>
                                    <div className="actions">
                                        <button 
                                        type="submit"
                                        className="btng">
                                            Search Artists
                                        </button>
                                    </div>
                                </form>
                            </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage