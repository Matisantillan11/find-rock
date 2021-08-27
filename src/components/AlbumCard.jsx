import React from 'react'
import { Link } from 'react-router-dom'
import DiscoVinilo from '../assets/images/DiscoVinilo.png'
import '../assets/styles/components/ArtistCard.css'

export const AlbumCard = ({ albumImg, albumName }) => {
	return (
		<>
			<Link to='/' className='link-card'>
				<div className='artistCard'>
					<img
						className='artistCard--img'
						src={albumImg || DiscoVinilo}
						alt={albumName}
					/>
					<p className='artistCard--name'>{albumName}</p>
				</div>
			</Link>
		</>
	)
}
