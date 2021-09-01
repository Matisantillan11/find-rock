import React, { useEffect } from 'react'
import { AlbumCard } from './AlbumCard.jsx'
import '../assets/styles/components/SimilarArtist.css'
import { Link } from 'react-router-dom'

export const SimilarArtists = ({ data }) => {
	/* const {
		state: { artists },
		getArtist,
	} = useArtist()

	useEffect(async () => {
		getArtist(
			`https://theaudiodb.com/api/v1/json/523532/search.php?s=${artist}`,
		)
	}, [artist]) */

	return (
		<>
			<div className='similarArtists'>
				{data.map((album, i) => {
					return (
						<Link
							to={`/album?${album.idAlbum}&artist=${album.idArtist}`}
							className='link-card'
							key={i}
						>
							<AlbumCard
								albumImg={album.strAlbumCDart}
								albumName={album.strAlbum}
							/>
						</Link>
					)
				})}
			</div>
		</>
	)
}
