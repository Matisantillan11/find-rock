import React, { useEffect } from 'react'
import { AlbumCard } from './AlbumCard.jsx'
import '../assets/styles/components/SimilarArtist.css'
import { useArtist } from '../hooks/useArtist.js'

export const SimilarArtists = ({ data, artist }) => {
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
						<AlbumCard
							key={i}
							artist={album.idArtist}
							albumId={album.idAlbum}
							albumImg={album.strAlbumCDart}
							albumName={album.strAlbum}
						/>
					)
				})}
			</div>
		</>
	)
}
