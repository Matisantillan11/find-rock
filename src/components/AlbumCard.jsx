import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/ArtistCard.css'

export const AlbumCard = () => {
	return (
		<div className='col-3'>
			<Link to='/'>
				<div className='artistCard'>
					<img
						className='artistCard--img'
						src={this.props.albumImg}
						alt={this.props.albumName}
					/>
					<p className='artistCard--name'>{this.props.albumName}</p>
				</div>
			</Link>
		</div>
	)
}

/* class AlbumCard extends Component{
    render(){
        
    }
}

export default AlbumCard; */
