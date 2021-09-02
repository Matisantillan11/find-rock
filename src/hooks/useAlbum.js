import { useState } from 'react'

export const useAlbum = () => {
	const [albumVideo, setAlbumVideo] = useState([])

	const getAlbumVideos = async (url, albumId) => {
		let albumVideo = await fetch(url)
		let data = await albumVideo.json()

		if (data.mvids === null) {
			setAlbumVideo({
				errorMsg: 'Album videos not found',
			})
		} else {
			let tracks = []

			data.mvids.forEach((track) => {
				if (Number(track.idAlbum) === Number(albumId)) {
					tracks = [...tracks, track]
				}
			})

			setAlbumVideo(tracks)
		}
	}

	return { albumVideo, getAlbumVideos }
}
