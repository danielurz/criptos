import { useState } from 'react'

function useSelectMonedas(label,monedas) {

  const [state, setState] = useState('')

  const UseMoneda = () => {
    return (
        <div className='select'>
            <label htmlFor="">{label}</label>
            <select value={state} onChange={e => setState(e.target.value)}>
                <option value="">-- Select --</option>
                {
                    monedas.map(moneda => {
                        return (
                            <option key={moneda.id} value={moneda.id}>{moneda.nombre}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

return [UseMoneda,state]
}

export default useSelectMonedas