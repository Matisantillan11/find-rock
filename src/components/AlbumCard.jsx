import React from 'react'
import DiscoVinilo from '../assets/images/DiscoVinilo.png'
import '../assets/styles/components/ArtistCard.css'

export const AlbumCard = ({ albumImg, albumName }) => {
	return (
		<>
			<div className='artistCard'>
				<img
					className='artistCard--img'
					src={albumImg || DiscoVinilo}
					alt={albumName}
				/>
				<p className='artistCard--name'>{albumName}</p>
			</div>
		</>
	)
}
