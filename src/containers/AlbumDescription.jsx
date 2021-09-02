import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AlbumCard } from '../components/AlbumCard'
import { useAlbum } from '../hooks/useAlbum'
import thumbd from '../assets/images/thumbd.jpg'
import { SearchBar } from '../components/SearchBar'

export const AlbumDescription = () => {
	const history = useHistory()
	const { albumVideo, getAlbumVideos } = useAlbum()
	let indexOfAnd = history.location.search.search('&')
	let indexOfEqual = history.location.search.search('=')
	let albumID = history.location.search.substr(1, indexOfAnd - 1)
	let artistId = history.location.search.substr(indexOfEqual + 1, 7)

	useEffect(() => {
		getAlbumVideos(
			`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${artistId}`,
			albumID,
		)
	}, [albumID, artistId])

	return (
		<>
			<SearchBar />
			<h2 style={{ textAlign: 'center', margin: '15px 0px 50px 0px' }}>
				Canciones del album disponibles
			</h2>
			<div style={{ width: '100vw', padding: '0 25px' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
						width: '100%',
					}}
				>
					{albumVideo.length > 0 ? (
						albumVideo.map((track) => {
							return (
								<a
									href={track.strMusicVid}
									target='_blank'
									key={track.idTrack}
									className='link-card'
								>
									<AlbumCard
										albumImg={track.strTrackThumb || thumbd}
										albumName={track.strTrack}
									/>
								</a>
							)
						})
					) : (
						<p>No se registraron tracks para este album! :c</p>
					)}
				</div>
			</div>
		</>
	)
}
