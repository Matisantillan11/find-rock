import React, { Component } from 'react'
import { AlbumCard } from './AlbumCard.jsx'
import '../assets/styles/components/SimilarArtist.css'
class SimilarArtist extends Component {
	render() {
		return (
			<>
				<div className='similarArtists'>
					{this.props.data.map((album, i) => {
						return (
							<AlbumCard
								key={i}
								albumImg={album.strAlbumCDart}
								albumName={album.strAlbum}
							/>
						)
					})}
				</div>
			</>
		)
	}
}

export default SimilarArtist
