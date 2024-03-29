import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import logo from '../assets/images/logo.svg'

import '../assets/styles/components/SearchBar.css'
import { useInitialState } from '../hooks/useInitialState'

export const SearchBar = () => {
	const {
		state: { search },
		searchArtist,
	} = useInitialState()

	const history = useHistory()

	const handleSubmit = (event) => {
		event.preventDefault()
		history.push(`/search?${search}`)
	}

	return (
		<>
			<div className='searchBar'>
				<div className='col-md-2'>
					<Link to='/'>
						<img className='searchBar--logo' src={logo} alt='logo' />
					</Link>
				</div>
				<div className='col-md-4'>
					<form className='form-inline' onSubmit={handleSubmit}>
						<div className='search form-group mx-sm-3 md-2'>
							<input
								onChange={(e) => searchArtist(e)}
								type='text'
								value={search}
								placeholder='Buscar una banda...'
							/>
						</div>
					</form>
				</div>
			</div>
			<hr />
		</>
	)
}
