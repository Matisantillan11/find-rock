import { ListItem } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAlbum } from '../hooks/useAlbum'

export const AlbumDescription = () => {
	const history = useHistory()
	const [video, setVideo] = useState('')
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
			<h2 style={{ textAlign: 'center', margin: '15px 0px 50px 0px' }}>
				Canciones del album disponibles
			</h2>
			{albumVideo.length > 0 ? (
				albumVideo.map((track) => {
					return (
						<div>
							<ListItemLink href={track.strMusicVid} target='_blank'>
								<ListItemText primary={track.strTrack} />
							</ListItemLink>
						</div>
					)
				})
			) : (
				<p>No se registraron tracks para este album! :c</p>
			)}

			<section id='video-container'></section>
		</>
	)
}

const ListItemLink = (props) => {
	return <ListItem button component={'a'} {...props} />
}
