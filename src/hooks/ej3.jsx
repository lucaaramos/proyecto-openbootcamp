import React, {useState, useContext} from 'react'

const miContexto = React.createContext(null)

const Componente1 = () => {
    //inicializamos un estado que se rellenara con los datos del padre
    const state = useContext(miContexto)
    return (
        <div>
            <h1>
                el Token es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = React.useContext(miContexto)

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}




export default function ComponenteContexto() {

    const estadoInicial =  {
        token: '1234567',
        sesion: 1
    }

    const [sesionData, SetsesionData] = useState(estadoInicial);

    function actualizarSesion(){
        SetsesionData(
            {
                token: '7654321',
                sesion: sesionData.sesion + 1
            })
    }
  return (
    <miContexto.Provider value={sesionData}>
        <h1>Ejemplo de useState y useContext</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}



