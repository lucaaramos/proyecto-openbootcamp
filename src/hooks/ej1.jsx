import React, {useEffect, useState} from 'react'

export default function Ej1() {
    const valorInicial = 0;

    const personaInicial = {
        nombre: 'Luca',
        email: 'lucaramos99@gmail.com'

    }

    const [contador, Setcontador] = useState(valorInicial);
    const [persona, Setpersona] = useState(personaInicial);

    function incrementarValor() {
        Setcontador(contador + 1)
        
    }

    function actualizarPersona(){
        Setpersona({
            nombre: 'Pri',
            email: 'prichubeliver@gmail.com'
        })
    }

  return (
    <div>
        <h1>
            Ejemplo contador
        </h1>
        <h2>
            Contador: {contador}
        </h2>
        <h2>
            Datos de la persona:
        </h2>
        <h3>
            Nombre: {persona.nombre}
        </h3>
        <h4>
            Email: {persona.email}
        </h4>
        <button onClick={incrementarValor}>Actualizar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  )
}
