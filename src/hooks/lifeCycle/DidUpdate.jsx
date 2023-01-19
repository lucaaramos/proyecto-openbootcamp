/**
 * Ejemplo de uso de componente didUpdate en componente clase y
 * ejemplo de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado')
    }

  render() {
    return (
      <div>
        <h1>
            DidUpdate
        </h1> 
    </div>
    )
  }
}


export default function DidUpdateHook() {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado')  
    }); // sin [] significa que no tiene ningun limite, queremos que se ejecute todas las veces. 

  return (
    <div>
        <h1>
            DidUpdate
        </h1> 
    </div>
  )
}

