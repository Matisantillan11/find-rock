import React, { Component } from 'react'

import '../assets/styles/containers/HomePage.css'

import logo from '../assets/images/logo.svg'
import { useInitialState } from '../hooks/useInitialState'
import { useHistory } from 'react-router-dom'

export const HomePage = () => {
	const {
		state: { search },
		searchArtist,
	} = useInitialState()

	const history = useHistory()

	const handleClick = (e) => {
		e.preventDefault()
		history.push(`/search?${search}`)
	}

	return (
		<>
			<div className='container'>
				<div className='row centered'>
					<div className='col-md-6 center'>
						<img src={logo} alt='logo' id='logo' />
						<form className='form-inline' onSubmit={handleClick}>
							<div className='search'>
								<input
									onChange={(e) => searchArtist(e)}
									type='text'
									value={search}
									placeholder='Buscar una banda...'
								/>
							</div>
							<div className='actions'>
								<button onClick={handleClick} type='button' className='btng'>
									Search Artists
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
