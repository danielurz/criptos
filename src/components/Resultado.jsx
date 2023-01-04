

function Resultado({info}) {

    const {PRICE,LASTUPDATE,HIGHDAY,LOWDAY,IMAGEURL} = info

  return (
    <div id="Resultado">
        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt=""/>
        <div>
            <p className="precio">Actual Price: <span>{PRICE}</span></p>
            <p>Higher price of the day: <span>{HIGHDAY}</span></p>
            <p>Higher price of the day: <span>{LOWDAY}</span></p>
            <p>Last Update: <span>{LASTUPDATE}</span></p>
        </div>
    </div>
  )
}

export default Resultado