import useLetras from "../hooks/useLetras"

function Letra() {

    const { letra, cargando } = useLetras()

  return (
    cargando ? 'Cargando...' : <div className="letra">{letra}</div>
  )
}

export default Letra