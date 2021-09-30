import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

const Gracias = () => {
    return (
        <div>
            <SEO title='Compra Exitosa' />
            <Purchase>
                <h2>Compra Exitosa</h2>
                <p>Espero que disfrutes de swag, lucelo con orgullo</p>
                <p>Te esperamos de vuelta, no pares de aprender!</p>
                <span role='img' aria-label='emoji'>💗</span>
                <Link to='/'>
                    <Button>Volver al Catalogo</Button>
                </Link>
            </Purchase>
        </div>
    )
}

export default Gracias
