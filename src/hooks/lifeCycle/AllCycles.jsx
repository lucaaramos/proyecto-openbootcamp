import React, {useEffect} from 'react'

export default function AllCycles() {

    useEffect(() => {
        console.log('Componente creado')

        //cuando el compoente aparece,
        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualizacion de componente');
        }, 1000)
        return () => {
            console.log('Componente va a desaparecer');
            clearInterval(intervalID);
        };
    }, []);

  return (
    <div>AllCycles</div>
  )
}
