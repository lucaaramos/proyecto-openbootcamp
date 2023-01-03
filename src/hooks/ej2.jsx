import React,{useEffect, useState, useRef} from 'react'

export default function Ej2() {

    const [contador1, Setcontador1] = useState(0);
    const [contador2, Setcontador2] = useState(0);

    const miRef = useRef();

    function incrementar1(){
        Setcontador1(contador1 + 1);
    }

    function incrementar2(){
        Setcontador2(contador2 + 1);
    }

    // useEffect(() => {
    //     console.log('Cambio de estado del componente');
    //     console.log('Mostrando referencia del dom');
    //     console.log(miRef);

    // });
    /*
    UseEffect para utilziar SOLO cuando se cambie el contador 1
    */
//    useEffect(() => {
//     console.log('Cambio de estado')
//    }, [contador1]);

    /*
    En este caso seria solo si cambia el contador 1 o el contador 2. Esto sirve para cuando trabajemos con varios estados y tengamos q controlar solo algunos
    */
   useEffect(() => {
    console.log('Cambio en el estado de contador 1 / 2')
    console.log('Mostrando mensaje')
   }, [contador1, contador2]);




  return (
    <div>
        <h1>Contador</h1>
        <h2>Contador 1: {contador1}</h2>
        <h2>Contador 2: {contador2}</h2>
        <h4 ref = {miRef}>
            ejemplo de ref
        </h4>
        <div>
            <button onClick={incrementar1}> contador1 </button>
            <button onClick={incrementar2}> contador2 </button>
        </div>
    </div>
  )
}
