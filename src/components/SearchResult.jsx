import React, { Component, useEffect } from 'react'
import { ArtistCard } from './ArtistCard.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useArtist } from '../hooks/useArtist.js'
import { useHistory } from 'react-router-dom'
import { LoaderCustom } from './LoaderCustom.jsx'

export const SearchResult = () => {
	const {
		state: { artists, loading, error, errorMessage },
		getArtist,
	} = useArtist()

	const history = useHistory()

	let searcher = history.location.search.substr(1).replace('%20', ' ')
	useEffect(() => {
		getArtist(
			`https://theaudiodb.com/api/v1/json/523532/search.php?s=${searcher}`,
		)
	}, [searcher])
	return (
		<>
			{loading && <LoaderCustom />}
			{error ? (
				<p className='center'>Error: {errorMessage}</p>
			) : (
				<div className='container'>
					<div className='artistCard_container'>
						{artists &&
							artists.map((artist) => {
								return (
									<ArtistCard
										key={artist.idArtist}
										artistName={artist.strArtist}
										artistImg={artist.strArtistThumb}
									/>
								)
							})}
					</div>
				</div>
			)}
		</>
	)
}
