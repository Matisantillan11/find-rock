import React from 'react'
import { Link } from 'react-router-dom'
import DiscoVinilo from '../assets/images/DiscoVinilo.png'
import '../assets/styles/components/ArtistCard.css'

export const AlbumCard = ({ albumId, albumImg, albumName, artist }) => {
	return (
		<>
			<Link to={`/album?${albumId}&artist=${artist}`} className='link-card'>
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
