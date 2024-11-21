<div align="justify">

## React - Dossier

- [Práctica 01](#práctica-01)
- [Práctica 02](#práctica-02)
- [Práctica 03](#práctica-03)
- [Práctica 04](#práctica-04)
- [Práctica 05](#práctica-05)
- [Práctica 06](#práctica-06)
- [Práctica 07](#práctica-07)
- [Práctica 08](#práctica-08)
- [Práctica 09](#práctica-09)
- [Práctica 10](#práctica-10)
- [Práctica 11](#práctica-11)
- [Práctica 12](#práctica-12)
- [Práctica 13](#práctica-13)
- [Práctica 14](#práctica-14)
- [Práctica 15](#práctica-15)
- [Práctica 16](#práctica-16)
- [Práctica 17](#práctica-17)
- [Práctica 18](#práctica-18)
- [Práctica 19](#práctica-19)
- [Práctica 20](#práctica-20)


#### Extras:
- Example



***

### Práctica 01

> 📂
> Crear el hola mundo descrito y agrega tu nombre completo al h3 (usando npx para crear la app y npm start para arrancarla como se indica en el tema )
>

```code
function Practice01() {
  return (
    <div>
      <h3> Hello World! Nabil León Álvarez</h3>
    </div>
  );
}

export default Practice01;
```

- Captura:
<div align="center">
<img src="./img/p1.png"/>
</div>

***
</br>

### Práctica 02

> 📂
> Realizar lo descrito y tomar captura de pantalla del mensaje en el navegador
>


- Captura:

<div align="center">
<img src="./img/p2.png"/>
</div>

</br>

### Práctica 03

> 📂
> Reproducir el ejemplo anterior, pero en lugar de mostrar números primos en el h1 dirá: “mis datos:” y en el h4 le habremos pasado un objeto literal JSON con tu
nombre, apellidos y estudios que estás realizando
>

```code
const Practice03 = () => {
    const myData = {name: 'Nabil', 
                    surname: 'León Álvarez',
                    studies: 'DAM'};

    return (
        <>
        <h1>myData:</h1>
        <h4>{JSON.stringify(myData)}</h4>
        </>
    );
}

export default Practice03;
```

- Captura:

<div align="center">
<img src="./img/p3.png"/>
</div>

</br>

### Práctica 04

> 📂
> Reproducir el ejemplo anterior, pero cambiando que los atributos que reciba
sean: num1 y num2 y lo que muestre es:
La suma de num1 y num2 es: num1 + num2
(donde num1 y num2 serían los datos que recibiera el componente )
>


```code
const Practice04 = (props) => {
    return (
            <>
            <h1>Sum:</h1>
            <p>La suma de {props.num1} y {props.num2} es: ({props.num1+props.num2})</p>
            </>
        );
    }
    Practice04.propTypes = {
            num1: PropTypes.number.isRequired,
            num2: PropTypes.number.isRequired
        }

export default Practice04;
```

- Captura:

<div align="center">
<img src="./img/p4.png"/>
</div>

</br>

### Práctica 05

> 📂
> Reproducir el ejemplo anterior de componente con typescript, pero cambiando
que los atributos que reciba sean de tipo numérico: num1 y num2 y lo que muestre es:
La suma de num1 y num2 es: num1 + num2
(donde num1 y num2 serían los datos que recibiera el componente )
>

```code
type Props = {
    num1: number;
    num2: number;
}

const Practice05 = (props: Props) => {

    return (
            <p>
                La suma de {props.num1 ?? 0} y {props.num2 ?? 0} es: 
                {(props.num1) + (props.num2)}
            </p>
        );
    }

export default Practice05;

```

- Captura:

<div align="center">
<img src="./img/p5.png"/>
</div>

</br>

### Práctica 06

> 📂
> Conseguir el renderizado anterior, generando el componente Reloj.ts
apropiado. Para ello generaremos el fichero: Reloj.ts y dentro estará el componente TSX
>

```code
type Props = {
    zone ?: string;
}

const Watch = (props: Props) => {
    const zoneStr = props.zone ?? "Europe/Madrid";
    const date = new Date().toLocaleDateString( "es-ES",{timeZone: zoneStr});
    const timeString = new Date().toLocaleTimeString("es-ES",{timeZone: zoneStr});
    return (
        <>
            <h2>Time at: {zoneStr}</h2>
            <p>{date}</p>
            <p>{timeString}</p>
        </>
    );
}

export default Watch;


type Props = {}


export const Practice06 = (props: Props) => {
  return (
    <>
    <h1>Actividad react: Relojes mundiales</h1>
    <Watch zone="Europe/Madrid" />
    <Watch zone="America/New_York" />
    <Watch zone="Europe/London" />
    </>
  )
}

export default Practice06;

```

- Captura:

<div align="center">
<img src="./img/p6.png"/>
</div>

</br>

### Práctica 07

> 📂
> Probar el código anterior. Tomar captura de pantalla del navegador al pulsar el
botón
>


```code
const ComponenteApp = (props:any) => {
    const mostrarHora = ()=>{
    alert(new Date());
}
    return (
            <>
                <h1> Pulsar en el botón para ver la hora</h1>
                <button onClick={mostrarHora}>Pulsar</button>
            </>
);

}
export default ComponenteApp;
```

- Captura:

<div align="center">
<img src="./img/p7.png"/>
</div>

</br>

### Práctica 08

> 📂
> Crear el código anterior de componente Contador en un fichero nuevo y cargar
en index.tsx en la parte de renderizado: ReactDOM.render() ese componente
Probarlo en el navegador y comprobar que efectivamente cambia el contador con los click
>


```code
class Practice08 extends Component {
    state = { count: 0 } 
    render () {
        const { count } = this.state 
    return (
            <div>
            <p>Has hecho click {count} veces</p>
            {  }
            <button onClick={() => this.setState({ count: count + 1 })}>
            Haz click!
            </button>
            </div>
        )
    }
}
export default Practice08;
```

- Captura:

<div align="center">
<img src="./img/p8.png"/>
</div>

</br>

### Práctica 09

> 📂
> Realizar con el Hook useState dentro de un functional component un
componente que sirva a un usuario para prácticar la tabla del 2. Cada vez que pulse en el
botón se le mostrará la solución correcta de la tabla. Así:
la primera vez que haga clic se le mostrará:
2x1 = 2
La segunda vez:
2x2=4
y así sucesivamente.
En definitiva: que vaya mostrando la tabla del 2 a cada click
Observar que después de 2x10 mostrará 2x1
>

```code
type Props = {
    numTable : number;
}

const Practice09 = (props: Props) => {
    const [counter, increment] = useState(2);
    const numTable = props.numTable ?? 2;

    function incrementCounter(){
        if (counter === 10){
            increment(1);
        }
        increment(counter+1);
    }
    
    return (
            <>
                <div>
                    <h2>Tabla del {numTable}</h2>
                    <p>{numTable}*{counter} = {numTable*counter}</p>
                    <button onClick={incrementCounter}> {numTable}*{counter+1} = {numTable*(counter+1)} </button>
                </div>

            </>
    )
}

export default Practice09
```

- Captura:

<div align="center">
<img src="./img/p9.png"/>
</div>

</br>

### Práctica 10

> 📂
> Crear un functional component react ( usa el snippet: tsrafc ) que tenga un
botón. Este botón al pulsarlo va agregando un nuevo número aleatorio de 0 a 100 de tal
forma que podemos ver gracias al state toda la lista de aleatorios generados ( Nota:
podemos usar: JSON.stringfy( nombredelarray ) para ver el array u otro objeto )
Nota: hay una forma sencilla de crear un nuevo array con un nuevo elemento conservando
los datos del anterior. Imaginemos que queremos agregar el número 5:
const arrayanterior: Array< any > = [4, 2, 7 ];
[ ...arrayanterior, 5 ]
>

```code
type Props = {}

const Practice10 = (props: Props) => {
    const [arraynum, setArraynum] = useState<Array<Number>>([]);

    function addNum(){
        const rndNum = Math.trunc(Math.random() * 100)+1;
        setArraynum( [...arraynum, rndNum]);
    }

  return (
    <>
        <div>
            <br></br>
            <p>{JSON.stringify(arraynum)}</p>
            <button onClick={addNum}> Add num </button>
        </div>

    </>
    
  )
}

export default Practice10
```

- Captura:

<div align="center">
<img src="./img/p10.png"/>
</div>

</br>


### Práctica 11

> 📂
> Crear el anterior functional component, ejecútalo y abre la consola ¿ se está
actualizando la información del atributo estático ? ¿ y de la variable: dato ? Ahora quita el
comentario de la línea: sethoraactual(“” + new Date());
Sabemos que de esa manera al actualizar el state se fuerza un nuevo renderizado ¿ se está
actualizando la info del atributo estático ? ¿ y de la variable: dato ?
>


```code
type Props = {}

const Practice11 = (props: Props) => {
  const [currentDate, setCurrentDate] = useState("");

  let data = 1;

  function update(){
    Practice11.staticAtt++;
    data++;
    console.log("static attribute: " + Practice11.staticAtt);
    console.log("data: " + data);
    //setCurrentDate("" + new Date());
  }


  return (
      <div>
        <h4>Static component</h4>
        <p>Static's info: {Practice11.staticAtt}</p>
        <button onClick={update}> Update</button>
      </div>
  )
}

Practice11.staticAtt = 2;

export default Practice11
```

- Captura:

<div align="center">
<img src="./img/p11-1.png"/>
</div>

```code
type Props = {}

const Practice11 = (props: Props) => {
  const [currentDate, setCurrentDate] = useState("");

  let data = 1;

  function update(){
    Practice11.staticAtt++;
    data++;
    console.log("static attribute: " + Practice11.staticAtt);
    console.log("data: " + data);
    setCurrentDate("" + new Date());
  }


  return (
      <div>
        <h4>Static component</h4>
        <p>Static's info: {Practice11.staticAtt}</p>
        <button onClick={update}> Update</button>
      </div>
  )
}

Practice11.staticAtt = 2;

export default Practice11
```

- Captura:

<div align="center">
<img src="./img/p11-2.png"/>
</div>


</br>

### Práctica 12

> 📂
> Crear la actividad que se acaba de describir. Notar que hay que usar un
useState para que muestre un texto u otro según lo que se haya pulsado
>

```code
type Props = {}

const Practice12 = (props: Props) => {
    const [color, setColor] = useState("");
    function selectColor(color: string) {
      setColor(color)
    }

  return (
    <>
        <h2>Select color:</h2>
        <p id="selected">You have selected: {color}</p>
        <button onClick={()=>selectColor("Red")} id="btnRed">Red</button>
        <button onClick={()=>selectColor("Green")} id="btnGreen">Green</button>
    </>
  )
}

export default Practice12
```


- Captura:

<div align="center">
<img src="./img/p12-1.png"/>
<img src="./img/p12-2.png"/>
</div>

</br>

### Práctica 13

> 📂
> Reproducir el ejemplo anterior en la aplicación monedas. Hacer que los li
no muestren únicamente el nombre de la moneda sino también el país. Ej:
li libra de UK /li
>

```code
type Props = {}

type Moneda = {
  nombre: string,
  pais: string
}

const Practice13 = (props: Props) => {
  const [monedas, setMonedas] = useState<Array<Moneda>>([]);

  function addMoneda() {
    const moneda: Moneda = {
      nombre: "libra",
      pais: "UK"
    }
    setMonedas([...monedas, moneda]);
  }

  return (
    <>
      <h3>Cliente de monedas</h3>
      <div>
        <button onClick={addMoneda}>
          Agregar moneda
        </button>
        <h4>Monedas:</h4>
        <ul>
          {
            monedas.map((m: Moneda, index: number) => {
              return (
                <li key={index}> {m.nombre} de {m.pais} </li>
              );
            })
          }
        </ul>
      </div>
    </>
  );
}

export default Practice13;
```

- Captura:

<div align="center">
<img src="./img/p13.png"/>
</div>

</br>


### Práctica 14

> 📂
> Crear un componente: TodasLasTablas que use el componente ya creado Así
muestra las tablas del 2 al 10 ( mirar imagen ejemplo )
Se usarán las pros: <PracticarTabla tabla={5} /> → Esto genera la tabla del 5. Usar un
map para un array [2,3,..,10] y establece para cada componente PracticarTabla el prop para
su tabla
>

```code
type Props = {}

const Practice14 = (props: Props) => {
    const arr = [2,3,4,5,6,7,8,9,10];

    return (
    <div className='grid-tables'>
        {
            arr.map(num => {
                    return <div className='table'><Practice09 key={num} numTable={num}/></div>
            }      
        )}
    </div> 

  )
}

export default Practice14
```

- Captura:

<div align="center">
<img src="./img/p14.png"/>
</div>

</br>


### Práctica 15

> 📂
> Crear el renderizado anterior. Al pulsar en botón rojo el área tiene color fuente rojo y borde
rojo. Si se pulsa en verde, pues en verde, y así con todos. Se recomienda crear las 4 clases
CSS y luego que se establezcan mediante:
<h4 className={claseaplicada}>Este area muestra los resultados de los botones </h4>
>

- CSS:
```code
.red{
    color: red;
    border: 2px solid red;
}

.blue{
    color: blue;
    border: 2px solid blue;
}

.green{
    color: green;
    border: 2px solid green;
}

.pink{
    color: pink;
    border: 2px solid pink;
}
```

```code
import React, { useState } from 'react'
import './practice15.css'
type Props = {}

const Practice15 = (props: Props) => {
  const [color, setColor] = useState("");
  
    function selectColor(color: string) {
      setColor(color)
    }

    return (
        <>
            <h2> Botones y CSS</h2>
            <p className={color}>Este es el area que muestra los resultados de los botones</p>
            <button id="green" onClick={()=>selectColor("green")}>Verde</button>     
            <button id="blue" onClick={()=>selectColor("blue")}>Azul</button>     
            <button id="red" onClick={()=>selectColor("red")}>Rojo</button>     
            <button id="pink" onClick={()=>selectColor("pink")}>Rosa</button>     

        </>
     )
}

export default Practice15
```



- Captura:

<div align="center">
<img src="./img/p15-1.png"/>
<img src="./img/p15-2.png"/>
<img src="./img/p15-3.png"/>
<img src="./img/p15-4.png"/>
</div>

</br>

### Práctica 16

> 📂
> En la práctica de los relojes de zonas horarias, crear un array con 5 zonas
horarias, entre ellas: Londres, Madrid y usando array.map generar los 5 componentes Reloj
con su respectiva propiedad timezone, dándole estilos CSS a los componentes
>

- CSS:
```code
body{
    background-color: #000;
}

.watch-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 1.2rem;
}

.watch-item {
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    text-align: center;
    background-color: #f0f0f0;
    width: 20rem;
}

.watch-item h2 {
    background-color: #f0f0f0;
    color: #000;
    font-size: 1.2rem;
}

.watch-item p {
    font-size: 1rem;
}

.watch-container {
    padding: 16.2px;
}
```

```code
type Props = {}

const Practice16 = (props: Props) => {
    const array = ["Europe/London", "Europe/Madrid",  "America/New_York", "Asia/Tokyo", "Europe/Berlin" ];
  return (
    <>
        <div className="watch-list">
            {array.map((zone, key) => (
                <div className="watch-item" key={key}>
                    <Watch zone={zone} />
                </div>
            ))}
        </div>
    </>
    
  )
}

export default Practice16
```



- Captura:

<div align="center">
<img src="./img/p16.png"/>
</div>

</br>

### Práctica 17

> 📂
> Crear un componente que tenga dos botones. Cuando se pulse en el primer
botón se cargará un componente que mostrará 10 números aleatorios de 0 a 100 a pulsar un
botón llamado “generar” que esté dentro del componente
Si se pulsa en el otro botón se carga otro componente que reemplaza el anterior que muestra
un saludo y la fecha actual ( la fecha se enviará mediante props )
>

- Greeting:

```code
type Props = {
    date ?: string
}

function Greeting(props: Props) {
    const dateStr = props.date ?? "no date provided" ;
  return (
    <>
        <h1> Greetings! </h1>z
        <p>Hello, today is {dateStr}</p>
    </>
  )
}

export default Greeting
```


```code
type Props = {}

const Practice17 = (props: Props) => {
    const [showRndNum, setRndNum] = useState(true);

    return (
    <>
        {showRndNum? <RndNumberComponent/> : <GreetingComponent/>}
        <button onClick={()=> setRndNum(true)}>Generate</button>
        <button onClick={()=>setRndNum(false)}>Greeting</button>
    </>
    
  )
}


const RndNumberComponent = (props: Props) =>{    
    const [arraynum, setArraynum] = useState<Array<Number>>([]);

    function generateRndNums(){
        let auxArr : number [] = [];

        for (let i = 0; i < 10; i++) {
            const rndNum = Math.trunc(Math.random() * 100)+1;
            auxArr.push(rndNum);
        }
        setArraynum(auxArr);
    }

    useEffect(() => {
        generateRndNums(); 
      }, []);

    return (
        <>
            <h2>Random Numbers</h2>
            <p>{JSON.stringify(arraynum)}</p>
        </>
    )
}


const GreetingComponent = (props: Props) =>{
    return (
        <>
            <Greeting date="2024-10-13"/>
        </>
    )
}


export default Practice17
```

- Captura:

<div align="center">
<img src="./img/p17-1.png"/>
<img src="./img/p17-2.png"/>
</div>

</br>

### Práctica 18

> 📂
> Realizar los dos ejemplos anteriores ( FuntionalComponent con useEffect() y
React.Component con los métodos componentDidMount() componentDidUpdate()).
Adaptarlos a React con Typescript
>

- v1:

```code
import React from 'react';

class Practice18ReactComponent extends React.Component<{}, { count: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Practice18ReactComponent;
```

- Captura:

<div align="center">
<img src="./img/p18-1.png"/>
</div>


- v2:

```code
type Props = {}

const Practice18 = (props: Props) => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      }, [count]);

  return (
    <>
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    </>
  )
}


export default Practice18
```

- Captura:

<div align="center">
<img src="./img/p18-2.png"/>
</div>

</br>

### Práctica 19

> 📂
>  Abriendo la consola para ver los mensajes de log, ejecutar el código anterior.
¿ se muestra la fecha cada vez que se renderiza ( modifica el estado ) ? ¿ el contador
empieza en qué número ?
Ahora modifica el código anterior quitando los comentarios en la línea: //setContador(-1)
¿ qué ocurre ahora ? ¿ En el primer renderizado ( antes de pulsar el botón) qué muestra el
contador? ¿Y después de ejecutar el botón?
Sigue modificando el código quitando los comentarios en el array de useEffect quedando la
línea final del useEffect() así:
}, [] )
¿ se ejecuta es useEffect() en cada renderizado ? ¿ se ejecuta en el momento del montaje ?
Finalmente vamos a dejar nuestro useEffect así:
useEffect(() => {
const efecto = () =>{
let fecha = new Date();
console.log(fecha);
setcontador(-1);
}
efecto();
}, [contador>10] )
Ahora ¿cuándo se ejecuta el useEffect
>

La fecha se muestra cada vez que se renderiza así cómo el contador.

- v1:

```code

type Props = {}

const Practice19 = (props: Props) => {
    const [contador, setcontador] = useState<number>(100);
    useEffect(() => {
        const efecto = () =>{
            let fecha = new Date();
            console.log(fecha);
            //setcontador(-1);
        }
        efecto();
    },/*[]*/ )
    
    return (
        <div>
        <h3>info en state: {contador}</h3>
        <button onClick={() => setcontador(contador + 1)}>Actualizar state</button>
        </div>
    )
}
export default Practice19
```

- Captura:

<div align="center">
<img src="./img/p19-1.png"/>
</div>

- v2:

Tras quitar el comentario, observamos que el contador no se actualiza. Además, cuando renderiza imprime 2 veces la fecha.

```code
const Practice19 = (props: Props) => {
    const [contador, setcontador] = useState<number>(100);
    useEffect(() => {
        const efecto = () =>{
            let fecha = new Date();
            console.log(fecha);
            setcontador(-1);
        }
        efecto();
    },/*[]*/ )
    
    return (
        <div>
        <h3>info en state: {contador}</h3>
        <button onClick={() => setcontador(contador + 1)}>Actualizar state</button>
        </div>
    )
}
```

- Captura:

<div align="center">
<img src="./img/p19-2.png"/>
</div>

- v3:

Tras quitar el comentario de [], el useEffect se ejectu una sola vez cuando el componente se monta antes del primer renderizado.

```code
const Practice19 = (props: Props) => {
    const [contador, setcontador] = useState<number>(100);
    useEffect(() => {
        const efecto = () =>{
            let fecha = new Date();
            console.log(fecha);
            setcontador(-1);
        }
        efecto();
    },/*[]*/ )
    
    return (
        <div>
        <h3>info en state: {contador}</h3>
        <button onClick={() => setcontador(contador + 1)}>Actualizar state</button>
        </div>
    )
}
```

- Captura:

<div align="center">
<img src="./img/p19-3.png"/>
</div>


- v4:

Con este cambio, el useEffect se ejecutara cada vez que se cumpla la condicion de contador>10 sea true.

```code
type Props = {}

const Practice19 = (props: Props) => {
    const [contador, setcontador] = useState<number>(100);
    useEffect(() => {
        const efecto = () =>{
            let fecha = new Date();
            console.log(fecha);
            setcontador(-1);
        }
        efecto();
    },[contador>10])
    
    return (
        <div>
        <h3>info en state: {contador}</h3>
        <button onClick={() => setcontador(contador + 1)}>Actualizar state</button>
        </div>
    )
}
export default Practice19
```

- Captura:

<div align="center">
<img src="./img/p19-4.png"/>
</div>

</br>

### Práctica 20

> 📂
> Realizar un componente para el juego de Acertar número secreto ( de 0 a 9 ).
Tendremos 10 botones siguiendo el patrón:
<button onClick=”{()=>apostar(7)}” > 7 </button>
Al montarse el componente se genera el número
aleatorio secreto, que permanecerá sin modificación
hasta que el usuario acierte el número. Cuando se pulsa
en los botones de apuesta se informa al usuario de si ha
acertado, si el número es menor o mayor que secreto
>


```code
type Props = {}

const Practice20 = (props: Props) => {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    const [restart, setRestart] = useState(true);
    const [numBet, setNumBet] = useState(0);
    const [win, setWin] = useState(false);
    const [message, setMessage] = useState('');


    useEffect(() => {
      const generateNum = () => {
        const rndNum = Math.trunc(Math.random() * arr.length );
        setNumBet(rndNum);
      }

      if (restart) {
        generateNum();
        setRestart(false); 
      }
      console.log(numBet);
    }, [restart]);


    const handleClick = (num: number) => {
        if (num === numBet) { 
          setWin(true);
          setMessage (`You won! Num was ${numBet}`);
        } else if(num > numBet){
          setMessage (`${num} > hidden number`);
        } else {
          setMessage (`${num} < hidden number`);
        }
    }
    
    const restartGame = () =>{
      setRestart(true);
      setMessage('');
      setWin(false);
    }

  return (
    <>
        <h2>Guess num:</h2>
        {arr.map(num => {
            return <button key={num} onClick={() => handleClick(num)}> {num}</button>
        })}
        <button onClick={restartGame}>Restart</button>

        <p>{message}</p>

        {win && <p>Congratulations! You guessed the number correctly.</p>}

        
     
    </>
  )
}

export default Practice20
```
- Captura:

<div align="center">
<img src="./img/p20-1.png"/>
<img src="./img/p20-2.png"/>
<img src="./img/p20-3.png"/>
<img src="./img/p20-4.png"/>
</div>

</br>

### Práctica 21

> 📂
> Copiar y ejecutar el ejemplo anterior. Buscar información sobre setInterval()
¿ qué significa el 1000 que le pasamos como parámetro ? ¿ para qué vale el valor devuelto
timerID ?. Comentar la línea: setfechaactual(newfecha) de la función tick() y escribir en su
lugar: console.log(newfecha); ¿ qué ocurre con el renderizado ? Mirar en la consola que
información está mostrando y explicar lo que ocurre
>

El 1000 que les estamos pasandp sirve para imdicar cada cuanto se va a ejecutar la función tick, en este caso cada 1000ms. 


```code
const Practice21 = (props: Props) => {
    const [actualDate, setActualDate] = useState<string>("");
    useEffect(() =>{
        const timerID = setInterval(
            tick, 
            1000
        );
        return () => clearInterval(timerID);
    }, []);

    function tick() {
        const newDate = " " + new Date();
        setActualDate(newDate);
    }

  return (
    <div>
        <h3>Example of dinamic watch</h3>    
        {actualDate}
    </div>
  )
}

export default Practice21
```
- Captura:

<div align="center">
<img src="./img/p21-1.png"/>
</div>

</br>

### Práctica 22

> 📂
> Ahora que ya sabemos usar setInterval() y combinarlo con useEffect()
modificar la actividad de los relojes mundiales de tal forma que se muestren con la
información de la hora actualizada cada segund
>


```code
import React, { act, useEffect, useState } from 'react'

type Props = {
    zone ?: string;
}

const Watch22 = (props: Props) => {
    const zoneStr = props.zone ?? "Europe/Madrid";
    const date = new Date().toLocaleDateString( "es-ES",{timeZone: zoneStr});
    const timeString = new Date().toLocaleTimeString("es-ES",{timeZone: zoneStr});
    const [actualDate, setActualDate] = useState<string>("");


    useEffect(() =>{
        const timerID = setInterval(
            tick, 
            1000
        );
        return () => clearInterval(timerID);
    }, []);

   
     function tick() {
        const newDate = " " + new Date();
        setActualDate(newDate);
    }

    return (
        <>
            <h2>Time at: {zoneStr}</h2>
            <p>{actualDate}</p>
            <p>{timeString}</p>
        </>
    );
}

export default Watch22;

type Props = {}

const Practice22 = (props: Props) => {

  const [actualDate, setActualDate] = useState<string>("");
    useEffect(() =>{
        const timerID = setInterval(
            tick, 
            1000
        );
        return () => clearInterval(timerID);
    }, []);

    function tick() {
      const newDate = " " + new Date();
      setActualDate(newDate);
    }

  return (
        <>
          <Watch22 zone="Europe/Madrid" />
          <Watch22 zone="America/New_York" />
          <Watch22 zone="Europe/London" />
        </>
    )
}

export default Practice22
```
- Captura:

<div align="center">
<img src="./img/p22.png"/>
</div>

</br>

### Práctica 23

> 📂
> Usando useRef(), crear un componente con 2 input y un párrafo ( etiqueta:
<p> ) donde uno de los inputs sea para el nombre y el otro input para los apellidos. Al
pulsar en el botón tomará la información de los dos inputs y lo mostrará en el párrafo
concatenados y dirá cuántas letras tiene el nombre completo.

>


```code
const Practice23 = (props: Props) => {
    const refName = useRef<HTMLInputElement>({} as HTMLInputElement);
    const refSurename = useRef<HTMLInputElement>({} as HTMLInputElement);
    const [text, settext] = useState<string>('');
    const [counter, setCounter] = useState<number>(0);


    function handleChanges(event:ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        let name = refName.current.value;
        let surename = refSurename.current.value;
        console.log(surename);

        let fullName = name + " " + surename;

        settext(fullName);
        setCounter(text.length)
    }



  return (
    <>
        <div className="main-container">
            <input type="text" name='userName' id='userName' placeholder='Insert your name' onChange={handleChanges} ref={refName}/>
            <input type="text" name="surenames" id='surenames' placeholder='Insert your surename(s)' onChange={handleChanges} ref={refSurename}/>
            <p>{text}: {counter} characters of length</p>

        </div>
    </>
    )
}

export default Practice23
```
- Captura:

<div align="center">
<img src="./img/p23.png"/>
</div>

</br>

### Práctica 24

> 📂
> Modificar el ejercicio de acertar número. Ahora en lugar de 10 botones, habrá
un único input y un único botón. Al pulsar el botón en la acción que desencadene se usará
useRef() para tomar la información que haya en el input y así realizar la apuesta
>


```code
export default class Game {
  public secret : number;
  public history :  string[];
  public finished : boolean;
  public maxValue : number;
  constructor(maxValue){
    this.maxValue = maxValue;
    this.secret = Math.trunc(Math.random() * maxValue);
    this.history = [];
    this.finished = false;
  }


  public bet(num : number) : boolean {
      if (!this.finished){
          if (num == this.secret){
              this.finished = true;
              this.history.push(`You won: num was ${this.secret} in ${this.history.length} attempts\n`);
          } else if (num < this.secret){
              this.history.push(`Bet: ${num} < secret\n`);
          } else {
              this.history.push(`Bet: ${num} > secret\n`);
          }
          
          return true;
      } 
      return false;
  }

  public getHistory = () :string[]  => {
      return this.history;
  }
}


const Practice24 = (props: Props) => {
    const inputNumRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const divResultRef = useRef<HTMLDivElement>({} as HTMLDivElement);
    const [game, setGame] = useState<Game>({} as Game);

    
    useEffect(() => {
      setGame(new Game(10));
    }, []);

    const handleSubmit = () => {
      let userInput = inputNumRef.current;
      let userGuess = parseInt(userInput.value);

      game.bet(userGuess);
      
      let divResultRefInfo = divResultRef.current;
      let results = game.getHistory();
      divResultRefInfo.innerText = results.toString();
    }

  

  return (
    <>
        <div>
            <h4>Guess num</h4>
            <input type="text" ref={inputNumRef}/>
            <button onClick={handleSubmit}>Submit</button>
            <div ref={divResultRef}></div>

            {game.finished && <p>Congratulations! You guessed the number correctly.</p>}
        </div>

    </>
  )
}

export default Practice24
```
- Captura:

<div align="center">
<img src="./img/p24.png"/>
</div>

</br>

### Práctica 25

> 📂
> Crear un functional component con dos botones uno dice: aleatorio que cada
vez que se pulsa, agrega un aleatorio a un array apuntado por useRef() y otro botón que
dice: mostrar este último botón copia el array almacenado en la referencia y lo pone en el
state. Mostrándose así el array de números generados
>


```code

```
- Captura:

<div align="center">
<img src="./img/p20-1.png"/>
</div>

</br>

### Práctica 26

> 📂
> 
>


```code

```
- Captura:

<div align="center">
<img src="./img/p20-1.png"/>
</div>

</br>

### Práctica 27

> 📂
> 
>


```code

```
- Captura:

<div align="center">
<img src="./img/p20-1.png"/>
</div>

</br>


### Práctica 28

> 📂
> Realizar un componente llamado: MostrarInput que se introduzca el
texto en el input y se vaya mostrando en un h5
>


```code
const Practice28 = (props: Props) => {
  const [text, setText] = useState<String>("");
  

  function handleChanges(event:ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    setText(event.target.value);
  }

    return (
    <>
        <label htmlFor="name"></label>
        <input type="text" id="name" onChange={handleChanges}/>
        <br/>
        <h5>You wrote: {text} </h5>
    </>
  )
}

export default Practice28
```
- Captura:

<div align="center">
<img src="./img/p28.png"/>
</div>

</br>

### Práctica 29

> 📂
> Realizar un componente llamado:
OperarBotones que al pulsar el botón de la izquierda
divida al valor actual entre 2 y si se pulsa el de la derecha
multiplique. Se debe hacer mediante un único método que responda a onClick ( el mismo
método para los dos botones )
>


```code
function Practica29({}: Props) {
    const [num, setnum] = useState<number>(1);
    

    function handleClick(event:React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        
        if(event.currentTarget.innerText.includes("*")){
            setnum(num*2);
        } else if(event.currentTarget.innerText.includes("/")){
            setnum(num/2);
        }
        
    }

    return (
    <>
        <h5>Current num: {num} </h5>
        <button onClick={handleClick}>{num}*2</button>
        <button onClick={handleClick}>{num}/2</button>
        <br/>
    </>
    )
  }

export default Practica29
```
- Captura:

<div align="center">
<img src="./img/p29-1.png"/>
<img src="./img/p29-2.png"/>
<img src="./img/p29-3.png"/>

</div>

</br>

### Práctica 30

> 📂
> Implementaremos el juego de acertar número secreto. Pero en esta ocasión,
habrá un input y un botón. Al pulsar el botón el programa evalúa la apuesta del input. NO se
usarán referencias. Se hará el uso de manejo de eventos para acceso al DOM
>


```code
const Practice30 = (props: Props) => {
    const [historic, sethistoric] = useState<string []>([]);
    const [num, setnum] = useState<number>(0);
    const [game, setgame] = useState<Game>({} as Game);

    useEffect(() => {
      setgame(new Game(10));
    }, [])


    const getInputValue = (event:ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        setnum(parseInt(event.currentTarget.value));
    } 


    function betGame (event:React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        game.bet(num);
        let historicUpdate = game.getHistory();
        sethistoric([... historicUpdate]);
    }
    
  return (
        <>
            <h4>Guess num</h4>
            <input type="text" id="numbet" onChange={getInputValue}/>
            <button type='button' onClick={betGame}>Bet</button>
            {historic}
        </>
    )
}

export default Practice30
```
- Captura:

<div align="center">
<img src="./img/p30-1.png"/>
<img src="./img/p30-2.png"/>
<img src="./img/p30-3.png"/>

</div>

</br>

### Práctica 31

> 📂
> Realizar un componente react: Memoria8.tsx que
realice el juego de memorizar de forma ordenada 8 números.
Durante 3 segundos se le muestra al usuario los 8 números y
luego se ocultan ( vale mostrar cualquier otra cosa ) Luego el
usuario irá pulsando en los botones. Primero debe pulsar el botón
que incluye el 1, si pulsa en la casilla que lo tiene se le muestra y
ya queda para siempre, en otro caso no muestra nada. Luego lo
mismo con el que incluye el 2, etc. Cada pulsación de botón aumenta un contador
>


```code
type Props = {}

const Practice31 = (props: Props) => {
    /**
     * UseStates
     */
    const [numberArray, setNumberArray] = useState<number[]>([]);
    const [revealedNumbers, setrevealedNumbers] = useState<number[]>([]);
    const [currentNumber, setCurrentNumber] = useState<number>(1); 
    const [attempts, setAttempts] = useState<number>(0);
    const [isShowing, setIsShowing] = useState<boolean>(true);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const numValuesArray = [1,2,3,4,5,6,7,8];

    useEffect(() => {
        setIsGameOver(false);
        generateNumbers();
    }, [isGameOver]);


    /**
     * Function to generate shuffle numbers
     */
    function generateNumbers() {
        const shuffleNumArray = [...numValuesArray];

        for (let i = 0; i < shuffleNumArray.length; i++){
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleNumArray[i], shuffleNumArray[j]] = [shuffleNumArray[j], shuffleNumArray[i]];
        }
        
        setNumberArray(shuffleNumArray);

        setTimeout(() =>{
            setIsShowing(false);
        }, 3000)
    }

    /**
     * Function to handle the users choice
     * @param index of the button
     */

    function handleClick(index : number){
        if (revealedNumbers.includes(numberArray[index])) {
            return;
        }

        setAttempts(attempts+1);

        if (numberArray[index] === currentNumber){
            const updatedRevealedNumbers = [...revealedNumbers, numberArray[index]];
            setrevealedNumbers(updatedRevealedNumbers);
            setCurrentNumber(currentNumber+1);
            
            if(updatedRevealedNumbers.length === numValuesArray.length){
                alert("Congratulations, you won!");
                setTimeout(() => {
                    endGame();
                }, 2500);
            }


        }

    }

    /**
     * Function to end and restart the game
     */
    function endGame(){
        setIsGameOver(true);
        setrevealedNumbers([]); 
        setCurrentNumber(1); 
        setAttempts(0);
        setIsShowing(true); 
    }

  return (
        <>
        <div className='main-container'>
            <h2>Memory Game</h2>
            <p>Attemps: {attempts}</p>
            <div className='btn-container'>
                {numberArray.map((num, index) => (
                    <button key={index} onClick={() => handleClick(index)}>
                        {isShowing || revealedNumbers.includes(num) ? num : "?"}                    
                    </button>
                ))}

            </div>
        </div>
        </>
  )
}

export default Practice31
```
- Captura:

<div align="center">
<img src="./img/p31-1.png"/>
<img src="./img/p31-2.png"/>
<img src="./img/p31-3.png"/>
<img src="./img/p31-4.png"/>
</div>

</br>

### Práctica 32

> 📂
> Reproducir el componente anterior y ejecutarlo. Darle algo de CSS.
Agregar ( fuera del formulario ) un input que mediante el evento onChange permita filtrar el
array de productos por nombre ( por ejemplo, si escribe queso aparecen todos los productos
con nombre queso: “queso rochefort”, “queso edam”,… )
>


```code
import React, { useState } from 'react'
import './Practice32.css'
type Props = {}

type Product = {
    name: string,
    price: number,
    quantity: number
}

const Practice32 = (props: Props) => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [list, setList] = useState<Product[]>([]);


    function processForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        let formProducts = e.currentTarget;

        const name = formProducts.nameProduct.value ?? "";
        const price = Number(formProducts.priceProduct.value) ?? 0;
        const quantity = Number(formProducts.quantityProduct.value) ?? 0;
        const newProduct: Product = { name, price, quantity };
        setProductList([...productList, newProduct]);
        setList([...list, newProduct]);
    }


    /**
     * Function to find a product by its name
     * @param e input change 
     * @returns product
     */
    function filterProducts(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();

        const filterProducts = e.currentTarget.value;
        if (filterProducts === ""){
            setProductList([...list]);
            return;
        } 

        setProductList([... productList.filter(includeProduct(filterProducts))]);
    }


    /**
     * Function to include a product from the search
     * @param filter to apply
     * @returns product from the search
     */

    function includeProduct(filter: string) {
        return (product: Product) =>
             product.name.toLowerCase().includes(filter.toLowerCase());
    }

  return (
  
    <>
        <h3>Product's info</h3>
        <form onSubmit={processForm}>
            <label htmlFor="nameId">Name</label>
            <input type="text" name='nameProduct' id='nameId'/>
            <label htmlFor="priceId">Price</label>
            <input type="number" name='priceProduct' id='priceId'/>
            <label htmlFor="quantityId">Quantity</label>
            <input type="number" name='quantityProduct' id='quantityId'/>
            <button type='submit'>Add</button>
        </form>
        <div>
            <input type="text" name='filterProduct' id='filterProductId' onChange={filterProducts} />
        </div>


        <textarea value={JSON.stringify(productList, null, 2)} cols={100} rows={30}></textarea>
    </>
  )
}

export default Practice32
```
- Captura:

<div align="center">
<img src="./img/p32-1.png"/>
<img src="./img/p32-2.png"/>
<img src="./img/p32-3.png"/>
</div>

</br>

### Práctica 33

> 📂 Crear un componente con un formulario que contenga dos input numéricos y
un submit Al enviar el formulario, se muestran los números primos entre los dos dados en
los input. Ejemplo: primos mayores que: 10 primos menores que: 18
mostrará: 11, 13, 17
> 
>


```code
import React, { useState } from 'react'
import './Practice32.css'
type Props = {}

type Product = {
    name: string,
    price: number,
    quantity: number
}

const Practice32 = (props: Props) => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [list, setList] = useState<Product[]>([]);


    function processForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        let formProducts = e.currentTarget;

        const name = formProducts.nameProduct.value ?? "";
        const price = Number(formProducts.priceProduct.value) ?? 0;
        const quantity = Number(formProducts.quantityProduct.value) ?? 0;
        const newProduct: Product = { name, price, quantity };
        setProductList([...productList, newProduct]);
        setList([...list, newProduct]);
    }


    /**
     * Function to find a product by its name
     * @param e input change 
     * @returns product
     */
    function filterProducts(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();

        const filterProducts = e.currentTarget.value;
        if (filterProducts === ""){
            setProductList([...list]);
            return;
        } 

        setProductList([... productList.filter(includeProduct(filterProducts))]);
    }


    /**
     * Function to include a product from the search
     * @param filter to apply
     * @returns product from the search
     */

    function includeProduct(filter: string) {
        return (product: Product) =>
             product.name.toLowerCase().includes(filter.toLowerCase());
    }

  return (
  
    <>
        <h3>Product's info</h3>
        <form onSubmit={processForm}>
            <label htmlFor="nameId">Name</label>
            <input type="text" name='nameProduct' id='nameId'/>
            <label htmlFor="priceId">Price</label>
            <input type="number" name='priceProduct' id='priceId'/>
            <label htmlFor="quantityId">Quantity</label>
            <input type="number" name='quantityProduct' id='quantityId'/>
            <button type='submit'>Add</button>
        </form>
        <div>
            <input type="text" name='filterProduct' id='filterProductId' onChange={filterProducts} />
        </div>


        <textarea value={JSON.stringify(productList, null, 2)} cols={100} rows={30}></textarea>
    </>
  )
}

export default Practice32
```
- Captura:

<div align="center">
<img src="./img/p33.png"/>
</div>
<br>

### Práctica 34

> 📂 La tabla anterior refleja la edad real de un perro y su equivalente si fuera
humano. Crear un componente con un formulario que contenga un input para poner la edad
del perro y tres radio button para elegir el tamaño del perro: pequeño, mediano, grande. Al
pulsar el botón de calcular se mostrará la edad “humana” del perro
Nota: recordar que los radio button llevan todos el mismo name y es en el campo: value
donde aparece la información que envían y es recibida
> 
>


```code


import React, { useState } from 'react'


type Props = {}


const Practice34 = (props: Props) => {
    const [age, setAge] = useState<string[]>([]);

    function addDogAge(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let form = e.currentTarget;
        let age = form.age.value;
        let sizeDog = form.sizeDog.value;

        let ageUpdate = 0;

        switch(sizeDog){
            case "Small":
                for (let i = 1; i <= age; i++) {
                    if (i == 1) {
                        ageUpdate += 20;
                    } else if (i == 2) {
                        ageUpdate += 8;
                    } else {
                        ageUpdate += 4;
                    }
                }
                break;

            case "Medium":
                for (let i = 1; i <= age; i++) {
                    if (i == 1) {
                        ageUpdate += 18;
                    } else if (i == 2) {
                        ageUpdate += 9;
                    } else if (i > 10) {
                        ageUpdate +=5;
                    }else {
                        ageUpdate += 6;
                    }
                }
                break;

            default:
                for (let i = 1; i <= age; i++) {
                    if (i == 1) {
                        ageUpdate += 16;
                    } else if (i == 2) {
                        ageUpdate += 6;
                    } else if (i>10){
                        ageUpdate += 11;
                    } else {
                        ageUpdate += 9;
                    }
                } 
                break;
        }

        let mensaje : string = " dog's age: " + age + ", human age: " + ageUpdate;
        setAge([...age, mensaje]);
    }


return (
    <>
    <p>{age}</p>
    <h2>Add dog's age</h2>
    <form onSubmit={addDogAge}>
        <input type="number" name="age" id="age" placeholder="Write your dog's age"/>
        <input type="radio" name="sizeDog" id="smallDog" value="Small"/>
        <label htmlFor="smallDog">Small</label>
        <input type="radio" name="sizeDog" id="mediumDog" value="Medium"/>
        <label htmlFor="mediumDog">Medium</label>
        <input type="radio" name="sizeDog" id="tipogrande" value="Big"/>
        <label htmlFor="bigDog">Big</label>
        <input type="submit" value="Add"/>
    </form>
    </>
)
}


export default Practice34
```
- Captura:

<div align="center">
<img src="./img/p34-1.png"/>
<img src="./img/p34-2.png"/>
</div>
<br>


### Práctica 35

> 📂 Realizar 3 componentes: EjStateByProps, A, B
El componente EjStateByProps contiene al componente A y al componente B
El componente A lo vemos en color azul ( observar que tiene un input ) Y el componente B
está en amarillo ( tiene un botón )
Si se escribe en el input del componente A ( evento onChange ) el texto aparece en el state
del padre: “input A dice: “ + mensaje escrito en el input
Si se pulsa en el botón del componente B el mensaje recibido en el state del padre es:
“pulsado botón en B”
> 
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 36

> 📂
> Generar dos componentes. El componente padre tendrá un array de personas
( hay que hacer la clase Persona también ) . Mediante ese array personas se generan tantos
componentes hijo: PersonaCard como personas tiene el array.
PersonaCard permite ir agregando y/o modificando datos en una ficha persona
Al inicio, en el componente raíz tenemos inicialmente únicamente el botón del más: “+” al
pulsarlo se crea una persona en el array y por tanto un componente hijo: PersonaCard que
nos permitirá editar los datos de Persona.
Nota: para localizar mejor el objeto ( aunque aquí no hay problema ya que la posición del
array coincide con id de persona ) es importante que al crear cada nueva persona se genera
un nuevo id que luego no pueda ser modificado
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 37

> 📂 Realizar la actividad descrita. Conseguir que al pulsar el botón el componente
hijo actualice la descomposición. En el componente padre se mostrará el número generado
bajo el botón.
Nota: observar que se debe permitir que el componente hijo pueda introducir un valor en el
input ( si pones en el value del input: <input value={props.numero}> no puedes )
> 
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 38

> 📂 Crear dos componentes. Uno es el padre que tiene un state de un array de
Usuarios ( objetos con atributo id y nombre únicamente ) definido de los nombres iniciales
: [{id: 1, nombre: “Ana”}, {id: 2,nombre:“Aristarco”} ] que permitirá generar 2 botones
que dicen: <button type=text >Modificar {nombre} … >
Al hacer click en alguno de los botones hace que el componente hijo reciba en un <input>
el nombre del Usuario. Se debe poder modificar el nombre y que al pulsar en un botón:
Terminar Edición que está dentro del componente hijo hace que el botón del padre donde
aparecía el nombre se haya reemplazado por el nuevo nombre
> 
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 39

> 📂
> Realizar la actividad descrita con el componente: InputToUpper
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 40

> 📂 Crear un componente que se visualice un reproductor y una lista de
reproducción ( busca urls de mp3 o radios ) Cuándo el usuario puse en uno de los
elementos de la lista y se de al play en el reproductor sonará la canción.
> 
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 41

> 📂
> Reproducir el código anterior de tal forma que tengamos cargada en nuestra
app 3 componentes que ya hemos hecho: Cronometro y RelojesMundiales y PersonasIMC
Agregar un componente About. Ese componente lo que mostrará es nuestros datos: nombre,
apellido, curso. Se debe poder navegar mediante el Navbar a todos los componentes. La
ruta inicial: “/” lo que debe mostrar es el componente About
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 42

> 📂
>  Crear otra aplicación React donde el componente App tendrá un router, en
esta ocasión, en lugar de “mi primer router” debe informar que es una aplicación de juegos
y deben estar cargados varios de los componentes de juegos que hemos hecho: el
memoriza8, acertarnumero Pudiendo pasar de un juego a otro gracias a nuestro
route
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>


### Práctica 43

> 📂
> Crear otra aplicación React para trabajar con los pokemon.
Hacer dos componentes: PokemonListCard y PokemonCard
La lista obtiene el JSON de la url: https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
que en el array: results aparecen 20 url de la api pokemon. Esas url se les pasarán como
props a PokemonCard, sustituyendo la constante uri del ejemplo anterior por la información
venida por props. Mostrando así de cada pokemon su nombre y su imagen. Agregar también
su altura y peso ( response.data.weight y response.data.height ) con el correspondiente
sufijo ( el peso está en: kg y la altura en: m )
>


```code
import React, { useEffect, useState } from 'react'
import axios from 'axios';


type Props = {
    url: string;
}


interface IResult {
    name: string;
    sprite: string;
    height: number;
    weight: number;
}

function PokemonCard(props : Props) {
    const [cardData, setcardData] = useState<IResult>({} as IResult);
    const {url} = props;

    useEffect(() => {
        getCardInfo(url);
    }, [])


    /**
     * Async function to fetch pokemon card from the api
     * @param link of the api
     */
    async function getCardInfo(link : string){
        const response = await axios.get(link);
        let info = {} as IResult;
        info.name = response.data.name;
        info.sprite = response.data.sprites.front_shiny;
        info.height = response.data.height /10;
        info.weight = response.data.weight /10;
        console.log(info.sprite);
        setcardData(info);
    }

    
    return (
        <>
            <div className='pokemonCard'>
                <h3>{cardData.name}</h3>
                <img src={cardData.sprite} alt={cardData.name}/>
                <p>Height: {cardData.height} m</p>
                <p>Weight: {cardData.weight} kg</p>
            </div>
        </>
    )
}

export default PokemonCard


import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard.tsx';
import axios from 'axios';



interface IPokemonList {
    count: number;
    next: string;
    previous: string;
    results: IResult[];
}

interface IResult {
    name: string;
    url: string;
}  

const Practice43 = () => {
    const [cardList, setCardList] = useState<IResult[]>([]);
    const uri: string = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

    useEffect(() => {
        getPokemonCard(uri)
    }, []);

    /**
     * Async function to fetch pokemon card from the api
     * @param url of the api
     */
    async function getPokemonCard(url: string) {
        const response = await axios.get(url);
        let list = response.data as IPokemonList;
        setCardList(list.results)
    }

    
    return (
        <>
            <div className="container">
                {cardList.map((card) => {
                    return <PokemonCard url={card.url} />
                })}
            </div>
        </>
    )
}

export default Practice43
```
- Captura:

<div align="center">
<img src="./img/p43.png"/>
</div>
<br>


### Práctica 44

> 📂
>  Crear otra aplicación React para trabajar con los datos de población de las
capitales de provincia.
El INE publica en: https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/2911?tip=AM
Pero habrá que adjuntar imagen de cada provincia ( usar json-server con los datos ya
preparados)
Hacer 3 componentes: CapitalesList, CapitalCard
CapitalesList toma la lista de las capitales y pasa como props a CapitalCard En CapitalCard
aparecerá la imagen y el nombre de la capital de provincia
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>


### Práctica 45

> 📂
> Crear en la aplicación de pokemon, las rutas con parámetro: /pokemon/id y
que envíe a un componente que cargue el pokemon correspondiente.
Hacer lo mismo con las capitales de provincia y que lo que se muestre e el componente con
más información de la capital ( componente Capital, no el componente CapitalCard )
En Capital.tsx tenemos un componente con la imagen, el nombre y los datos de población
de los últimos años
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 46

> 📂
>  Reutilizar el ejemplo anterior para nuestra aplicación de capitales de provincia
y mejorarlo de tal forma que se pueda crear una capital de provincia nueva . Observar que
hay que agregar la ruta pertinente en el router. Se propone: /crearcapital y poner el link
pertinente en el <nav>
Nota: no vamos a subir imágenes nuevas. Las imágenes ya estarán cargadas en json-server
lo único que hacemos en el axios.post es decirle la ruta de la imagen
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 47

> 📂
> Las opciones de: modificar capital y borrar capital son muy sencillas una vez
dominado lo anterior. Buscar el funcionamiento específico de axios y crear los
componentes de borrado y modificación pertinentes para realizar esas acciones
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 48

> 📂
> En la actividad que hicimos del cálculo del IMC, donde mostrábamos una
lista de personas donde cada una se representaba en un componente PersonaCard, hacer
uso de json-server para ir agregando los objetos persona a la api y leerlos desde allí.
Comprobar que quedan correctamente creados ( el fichero json queda modificado. Y
además la próxima vez que se arranque la aplicación tomará los datos actualizados )
Ponerle un router y tener soporte para rutas parametrizadas. Habilitar también el borrado de
personas en la api
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 49

> 📂
> En nuestras apps de capitales y personas imc, al hacer la edición y pulsar en el
botón que ejecuta el cambio en la api, usar el hook para que la app cargue directamente el
componente raíz ( se entiende que una vez se ha terminado de editar, no hay ningún interés
en quedarse en el componente de edición 
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 50

> 📂
> Cear un contexto en la aplicación de pokemon La idea es que haya un botón
en cada PokemonCard que diga: “establecer favorito” de tal forma que si el usuario pulsa el
botón, elige como su pokemon favorito el de la actual PokemonCard. Debe mostrarse los
datos de ese pokemon en todo momento (Para ello se propone crear un componente llamado
PokemonFavorite igual que el Navbar aparece en todo momento en el router, mostramos los
datos de ese pokemon justo dentro de <Browserrouter> pero por fuera de <Routes>)
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>


### Práctica 51

> 📂
> Cear un contexto en la aplicación de capitales y un componente <Login>
accesible en el navbar del router. Este login únicamente guardará el nombre del usuario en
el contexto ( nada de contraseña ni roles ) y en todos los componentes de la aplicación debe
decir: “hola nombreusuario! “
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>

### Práctica 52

> 📂
> En la aplicación de pokemon guardar los datos del pokemon favorito, cuando
se establezca o modifique en localstorage. De tal forma que cuando se inicie la App cargue
la información del pokemon de local storage y lo ponga en el contexto.
>


```code

```
- Captura:

<div align="center">
<img src="./img/p350-1.png"/>
</div>
<br>



</div>