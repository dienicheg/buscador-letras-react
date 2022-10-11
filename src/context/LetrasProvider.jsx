import { useState, createContext } from "react";
import axios from "axios";
const LetrasContext = createContext()


const LetrasProvider = ({children}) => {

   
    const [alerta, setAlerta] = useState('')
    const [letra, setLetra] = useState('')
    const [cargando, setCargando] = useState(false)

    const busquedaLetra = async busqueda => {
        const {artista, cancion} = busqueda 
        const url = 'https://powerlyrics.p.rapidapi.com/getlyricsfromtitleandartist'
        const options = {
            method: 'GET',
            params: {title: artista, artist: cancion},
            headers: {
              'X-RapidAPI-Key': 'c514ab5db7mshe83d3752b66e6bbp17c210jsn941514e914ff',
              'X-RapidAPI-Host': 'powerlyrics.p.rapidapi.com'
            }
          };

        try {
            setCargando(true)
            const {data} = await axios(url, options);
            console.log(data)
            if(data.success){
              setLetra(data.lyrics);
              setAlerta('')
            } else {
              setAlerta('Canción no encontrada')
            }
          
          } catch (error) {
            console.error(error)
          }

        setCargando(false)
    }

    return (
        <LetrasContext.Provider
         value={{
            alerta,
            setAlerta,
            busquedaLetra,
            letra,
            cargando
         }}
        >
            {children}
        </LetrasContext.Provider>
    )
}


export {
    LetrasProvider
}

export default LetrasContext