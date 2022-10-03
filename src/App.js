import React, {useState} from 'react'
import Led from './componentes/Led'

export default function App() {

  const [ligado, setLigado]=useState(false)

  //cancelar o comportamento padrão do componente
  const cancelar=(obj)=>{
    return obj.preventDefault()
  }
  
  return (
    <>
    <div>
    <Led ligado={ligado} setLigado={setLigado}/>
    </div>
      
      <a 
        href='http://youtube.com' 
        target='_blank' 
        onClick={(e)=>cancelar(e)}
        >
        Curso de React - Eventos em React
      </a>
    </>
  );
}


