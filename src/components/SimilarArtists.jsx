import React, { Component } from 'react'
import { AlbumCard } from './AlbumCard.jsx'
import '../assets/styles/components/SimilarArtist.css'
class SimilarArtist extends Component {
	render() {
		return (
			<>
				<div className='row center margins50'>
					<div className='title'>
						<h4>Artist Album</h4>
						<hr />
					</div>
				</div>
				<div className='similarArtists'>
					{this.props.data.slice(0, 4).map((album, i) => {
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
