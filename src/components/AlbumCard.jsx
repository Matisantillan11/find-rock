import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/ArtistCard.css'

export const AlbumCard = ({ albumImg, albumName }) => {
	return (
		<div className='col-3'>
			<Link to='/'>
				<div className='artistCard'>
					<img className='artistCard--img' src={albumImg} alt={albumName} />
					<p className='artistCard--name'>{albumName}</p>
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
