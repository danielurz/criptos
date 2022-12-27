import { useState,useEffect } from 'react'
import Formulario from './components/Formulario'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'
import Resultado from './components/Resultado'

function App() {

  const [valores, setValores] = useState({})
  const [info, setInfo] = useState({})
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    if (Object.values(valores).length > 0) {
      
      const {moneda,cripto} = valores
      
      const fetchPares = async () => {
        setSpinner(true)
        setInfo({})
        
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        const datos = resultado.DISPLAY[cripto][moneda]

        setSpinner(false)
        setInfo(datos);
      }

      fetchPares()
    }
  }, [valores])
  
  

  return (
    <div className='App'>
      <div className="contenedor">
        <img src={ImagenCripto} alt="" />
        <div className="form-box">
          <p className='title'>Conversor de Criptomonedas</p>
          <Formulario
            setValores={setValores}/>
         {spinner && <Spinner/>}
         {Object.values(info).length > 0 && <Resultado info={info}/>}
        </div>
      </div>
    </div>
  )
}

export default App