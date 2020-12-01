import React, {Component} from 'react'



import '../assets/styles/components/artistCard.css'
export default class extends Component{
    render(){
        return(
            <div className="col-3">
                <div 
                className="artistCard"
                >
                    <img 
                    className = "artistCard--img"
                    src={this.props.artistImg}
                    alt={this.props.artistName}
                    />
                    <p 
                    className="artistCard--name">
                        {this.props.artistName}
                    </p>
                </div>
            </div>
        )
    }
}