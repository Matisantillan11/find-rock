import { useState } from 'react'
import { InitialState } from '../initialState'

export const useInitialState = () => {
	const [state, setState] = useState(InitialState)

	const searchArtist = (event) => {
		setState({ ...state, search: event.target.value })
	}

	return { state, searchArtist }
}
