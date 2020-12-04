import React from 'react'

const Footer = ({children}) =>{
        return(
            <>
                {children}
                <div className="row">
                    <div className="col-md-12 center">
                        <p className="margins50">Todos los derechos reservados. 2020 @matisantillan11</p>
                    </div>
                </div>
            </>
        )
}

export default Footer