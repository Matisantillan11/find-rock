import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/ArtistCard.css'

export const ArtistCard = ({ artistImg, artistName }) => {
	return (
		<div className='artistCard_container'>
			<Link to={`/artist?${artistName}`}>
				<div className='artistCard'>
					<img className='artistCard--img' src={artistImg} alt={artistName} />
					<p className='artistCard--name'>{artistName}</p>
				</div>
			</Link>
		</div>
	)
}
