import { useState } from 'react'
import { InitialState } from '../initialState'

export const useArtist = () => {
	const [state, setState] = useState(InitialState)
	const [albums, setAlbums] = useState([])

	const getArtist = async (url) => {
		setState({ ...state, loading: true })
		const response = await fetch(url)
		const data = await response.json()

		if (data.artists === null) {
			setState({
				...state,
				loading: false,
				error: true,
				errorMessage: 'Artist not found',
			})
		} else {
			setState({
				...state,
				error: false,
				loading: false,
				artists: data.artists,
			})
		}
	}

	const getAlbums = async (url) => {
		setState({ ...state, loading: true })
		const response = await fetch(url)
		const data = await response.json()
		if (data.albums === null) {
			setState({
				...state,
				loading: false,
				error: true,
				errorMessage: 'Album not found',
			})
		} else {
			setAlbums(data.album)
		}
	}

	return { state, albums, getArtist, getAlbums }
}
