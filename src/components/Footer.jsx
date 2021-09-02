import React from 'react'

import '../assets/styles/components/App.css'
const Footer = ({ children }) => {
	return (
		<>
			{children}
			<div className='footer'>
				<p>Todos los derechos reservados. 2020 @matisantillan11</p>
			</div>
		</>
	)
}

export default Footer
