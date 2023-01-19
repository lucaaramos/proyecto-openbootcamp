/**
 * Ejemplo del uso de ciclo de vida en componente clase y el hook en ciclo de vida
 * en componente funcional
 */
import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al dom (renderice)")
    }
    
  render() {
    return (
        <div>
            <h1>
                DidMountHook
            </h1>
        </div>
    )
  }
}


export default function DidMountHook() {
    
    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al dom (renderice)")
    }, []);

  return (
    <div>
        <h1>
            DidMountHook
        </h1>
    </div>
  )
}

