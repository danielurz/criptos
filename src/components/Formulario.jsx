import useSelectMonedas from "../hooks/useSelectMonedas"
import { useEffect, useState } from "react"

function Formulario({setValores}) {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const objeto = [
    {id:'USD',nombre:'Dolar Americano'},
    {id:'GBP',nombre:'Libra Esterlina'},
    {id:'EUR',nombre:'Euro'},
    {id:'MEX',nombre:'Peso Mexicano'},
    {id:'COP',nombre:'Peso Colombiano'},
  ]

  useEffect(() => {
    const fetchCriptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
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
  


  const [UseMoneda,moneda] = useSelectMonedas('Elige tu Moneda',objeto)
  const [UseCriptomoneda,cripto] = useSelectMonedas('Elige tu Criptomoneda',criptos)

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
      {error && <div id="Error"><p>Completa Ambos Campos</p></div>}
      <UseMoneda/>
      <UseCriptomoneda/>
      <input type="submit" value="CALCULAR" />
    </form>
  )
}

export default Formulario