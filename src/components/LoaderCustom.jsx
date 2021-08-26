import React from 'react'
import Loader from 'react-loader-spinner'

export const LoaderCustom = () => {
	return (
		<>
			<div
				style={{
					minWidth: '100vw',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'center',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Loader type='Circles' color='#5F6368' height={60} width={60} />
			</div>
		</>
	)
}
