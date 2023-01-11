import useSelectMonedas from "../hooks/useSelectMonedas"
import { useEffect, useState } from "react"

function Formulario({setValores}) {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const objeto = [
    {id:'USD',nombre:'American Dolar'},
    {id:'GBP',nombre:'Pound Sterling'},
    {id:'EUR',nombre:'Euro'},
    {id:'MEX',nombre:'Mexican Peso'},
    {id:'COP',nombre:'Colombian Peso'},
  ]

  useEffect(() => {
    const fetchCriptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const datos = resultado.Data.map(dato => {
          const objetoCriptos = {
            id: dato.CoinInfo.Name,
            nombre: dato.CoinInfo.FullName
          }
          return objetoCriptos
      })

      setCriptos(datos);
    }
    fetchCriptos()
  }, [])
  


  const [UseMoneda,moneda] = useSelectMonedas('Choose your Currency',objeto)
  const [UseCriptomoneda,cripto] = useSelectMonedas('Choose your Crypto',criptos)

  const handleSubmit = e => {
    e.preventDefault()

    if([moneda,cripto].includes('')) {
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 5000);
      return
    }

    setValores({moneda,cripto})
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <div id="Error"><p>Fill both fields</p></div>}
      <UseMoneda/>
      <UseCriptomoneda/>
      <input type="submit" value="CALCULATE" />
    </form>
  )
}

export default Formulario