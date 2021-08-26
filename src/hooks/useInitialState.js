import { useState } from 'react'
import { InitialState } from '../initialState'

export const useInitialState = () => {
	const [state, setState] = useState(InitialState)
	const getArtist = () => {}

	const searchArtist = (event) => {
		setState({ ...state, search: event.target.value })
	}

	return { state, searchArtist }
}
