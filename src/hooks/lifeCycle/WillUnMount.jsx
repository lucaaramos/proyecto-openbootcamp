/**
 * Ejemplo de componente willunmount y 
 * ejemplo de uso de hooks para componente funcional
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }
  render() {
    return (
      <div>
        <h1>
            WillUnMount
        </h1>
      </div>
    )
  }
}


export default function WillUnMountHook() {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);

  return (
    <div>WillUnMountHook</div>
  )
}


