import { useState } from "react"
import useLetras from "../hooks/useLetras"

function Formulario() {

    const [ busqueda, setBusqueda ] = useState({
        artista: '',
        cancion: ''
    })

    const { setAlerta, busquedaLetra } = useLetras()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Coloca nombre de Artista y Canción')
            return
        }
        busquedaLetra(busqueda)
    }
  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca por artistas y canción</legend>

        <div className="form-grid">
            <div>
                <label htmlFor="artista">Artista</label>
                <input 
                    type="text"
                    name="artista"
                    placeholder="Nombre de Artista"
                    value={busqueda.artista}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name]: e.target.value
                    })}
                />
            </div>
            <div>
                <label htmlFor="">Canción</label>
                <input 
                    type="text"
                    name="cancion"
                    placeholder="Nombre de Canción"
                    value={busqueda.cancion}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name]: e.target.value
                    })}
                />
            </div>
            <input type="submit" value="Buscar" />
        </div>
    </form>
  )
}

export default Formulario