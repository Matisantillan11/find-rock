import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import '../assets/styles/containers/Artist.css'

import { SearchBar } from '../components/SearchBar.jsx'
import SimilarArtists from '../components/SimilarArtists'
import { useArtist } from '../hooks/useArtist'
import { LoaderCustom } from '../components/LoaderCustom'

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
			{loading && <LoaderCustom />}
			{error && <p className='center'>Error: {errorMessage}</p>}
			<div className='container'>
				{artists &&
					artists.map((artist, i) => {
						return (
							<div key={i} className='artist_detail--container'>
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

				{albums ? (
					<div>
						<h3 style={{ textAlign: 'center', marginTop: '20px' }}>Albums</h3>
						<SimilarArtists data={albums} />
					</div>
				) : null}
			</div>
		</>
	)
}
