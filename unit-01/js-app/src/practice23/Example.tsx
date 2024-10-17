import React, { useRef, useState } from 'react'
const EjemploUseRef = () => {
const inputnumero = useRef<HTMLInputElement>({} as HTMLInputElement);
const divresultado = useRef<HTMLDivElement>({} as HTMLDivElement);
function multiplicar(){
let htmlinput = inputnumero.current;
let numero = Number(htmlinput.value);
let htmldiv = divresultado.current;
htmldiv.innerText = "" + ( 2 * numero);
}
return (
<div>
<h4>Componente Ejemplo useRef</h4>
<input type="text" ref={inputnumero} />
<button onClick={multiplicar}>Multiplicar por 2</button>
<div ref={divresultado}>
</div>
</div>
)
}
export default EjemploUseRef