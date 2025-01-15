<div align="justify">

## Dossier - React Native

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
- [Práctica 21](#práctica-21)
- [Práctica 22](#práctica-22)
- [Práctica 23](#práctica-23)
- [Práctica 24](#práctica-24)
- [Práctica 25](#práctica-25)
- [Práctica 26](#práctica-26)
- [Práctica 27](#práctica-27)
- [Práctica 28](#práctica-28)
- [Práctica 29](#práctica-29)
- [Práctica 30](#práctica-30)
- [Práctica 31](#práctica-31)
- [Práctica 32](#práctica-32)
- [Práctica 33](#práctica-33)
- [Práctica 34](#práctica-34)
- [Práctica 35](#práctica-35)
- [Práctica 36](#práctica-36)
- [Práctica 37](#práctica-37)
- [Práctica 38](#práctica-38)
- [Práctica 39](#práctica-39)
- [Práctica 40](#práctica-40)

***

### Práctica 01

> 📂
> Crearemos un: “hola mundo!. Soy nombrealumno”
Para ello vamos a App.tsx. Dejaremos únicamente un componente View ( que es el
contenedor habitual en react native ) y pondremos dentro un componente Text ( que es
donde escribiremos ) Practica con tus conocimientos de CSS
Tener en cuenta que la mayoría son válidos, únicamente cambiando la separación con
guiones por camel case, y pasando un objeto JSON a style. Así por ejemplo, si queremos
hacer que el view ocupe todo en color rosa y ubique su contenido en el centro de la
pantalla:<View style={{ backgroundColor: "lightpink", flex: 1, justifyContent: 'center' }}>
>

- Código:

```tsx
const Practice01 = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola mundo! Soy Nabil</Text>
    </View>
  )
}
```

- Estilos:

```tsx
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightpink',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});
```

- Captura:
<div align="center">
<img src="./img/p1-01.png"/>
</div>

***
</br>

### Práctica 02

> 📂
> Reproducir el código anterior. Cambia el color del borde, redondea un poco el
borde ( busca la propiedad, es muy parecida a CSS ) y pon otro color de fondo. Modifica
también para que aparezcan dos botones. Uno será para incrementar ( el botón dirá: “incrementar” ) y otro botón para decrementar.
>


- Código:

```tsx
const Practice02 = (props: Props) => {
  const  [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title='Increment' onPress={()=>setCounter(counter+1)}/>
      <Button title='Substract' onPress={()=>setCounter(counter-1)}/>
    </View>
  )
}

export default Practice02
```

- Estilos:

```tsx
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
        borderColor: "red",
        borderRadius: 10,
        backgroundColor: 'lightred',
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 18,
        color: '#333',
    },
});
```


- Captura:
<div align="center">
<img src="./img/p2-01.png"/>
<img src="./img/p2-02.png"/>
<img src="./img/p2-03.png"/>
</div>

***
</br>


### Práctica 03

> 📂
> Crear la estructura de carpetas que hemos nombrado y un componente:
InicioScreen que será el que contenga la pantalla con los botones y el contador. En
App.tsx se hará la llamada a: <InicioScreen /> Los estilos deberán separarse usando
StyleSheet.create()
>


- Código:

```tsx
import Counter from '../components/Counter'
import styles from '../themes/Practice03Styles'

type Props = {}

const InitialScreen = (props: Props) => {
  return (
    <View style={styles.initialScreen}>
        <Counter/>
    </View>
  )
}
```

- Estilos:

```tsx
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'lightred',
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 18,
        color: '#333',
    },

    initialScreen: {
        flex: 1,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
```


- Captura:
<div align="center">
<img src="./img/p3-01.png"/>
<img src="./img/p3-02.png"/>
</div>

***
</br>



</div>