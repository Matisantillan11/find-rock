import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import '../assets/styles/containers/Artist.css'

import { SearchBar } from '../components/SearchBar.jsx'
import SimilarArtists from '../components/SimilarArtists'
import { useArtist } from '../hooks/useArtist'

export const Artist = () => {
	const {
		state: { artists, loading, error, errorMessage },
		albums,
		getArtist,
		getAlbums,
	} = useArtist()

	const history = useHistory()
	let searcher = history.location.search.substr(1).replace('%20', ' ')

	useEffect(() => {
		getArtist(
			`https://theaudiodb.com/api/v1/json/523532/search.php?s=${searcher}`,
		)

		getAlbums(
			`https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${searcher}`,
		)
	}, [searcher])
	return (
		<>
			<SearchBar />
			{loading && <p className='center'>Loading...</p>}
			{error && <p className='center'>Error: {errorMessage}</p>}
			<div className='container'>
				<div className='row center'>
					<div className='col-md-2' />

					{artists &&
						artists.map((artist, i) => {
							return (
								<div key={i} className='col-md-7'>
									<img
										src={artist.strArtistThumb}
										alt={artist.strArtist}
										className='artist--img'
									/>
									<h3>{artist.strArtist}</h3>
									<p>{artist.strBiographyEN}</p>
								</div>
							)
						})}
				</div>
			</div>

			{albums && <SimilarArtists data={albums} />}
		</>
	)
}
