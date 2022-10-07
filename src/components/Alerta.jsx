import React from 'react'
import useLetras from '../hooks/useLetras'
function Alerta({children}) {

  const {cargando} = useLetras()
  return (
    cargando ? 'Cargando...' : <div className='alerta'>{children}</div>
  )
}

export default Alerta