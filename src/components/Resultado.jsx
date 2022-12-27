

function Resultado({info}) {

    const {PRICE,LASTUPDATE,HIGHDAY,LOWDAY,IMAGEURL} = info

  return (
    <div id="Resultado">
        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt=""/>
        <div>
            <p className="precio">Precio Actual: <span>{PRICE}</span></p>
            <p>Precio mas alto del dia: <span>{HIGHDAY}</span></p>
            <p>Precio mas bajo del dia: <span>{LOWDAY}</span></p>
            <p>Ultima actualizacion: <span>{LASTUPDATE}</span></p>
        </div>
    </div>
  )
}

export default Resultado