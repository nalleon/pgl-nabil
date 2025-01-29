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

### Práctica 04

> 📂
> Realizar la pantalla anterior siguiendo lo descrito ( poner un width y un height
de 100 en el style del componente Caja.tsx ) . Para que el View “escenario” ocupe el total,
poner en sus estilos la propiedad: flex: 1


- Código:

```tsx
type Props = {
  color : string;
}

const Box = (props: Props) => {
  const { color } = props;

  return (
    <View style={{...styles.box, backgroundColor:color}}>
    </View>
  )
}

const BoxContainer = () => {
  const colors = ["red", "lightblue", "lightgreen"];

    return (
    <View style={styles.container}>
        {
            colors.map((colorItem, index) => (
            <Box key={index} color={colorItem}/>

            ))
        }  
    </View>
    )
}


const Practice04Screen = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Contenedor principal </Text>
      <BoxContainer/>
    </View>
  )
}
```

***
</br>


### Práctica 05

> 📂
> Si en el componente: Caja.tsx ponemos 2 botones, uno
para incrementar el valor de flex y otro para decrementarlo, podremos ir
viendo el efecto de modificar dicho atributo en cada una de las tres
cajas. Agregar los dos botones y que el dato que se muestra: flex: 0 se
actualice según las pulsaciones de esos botones, implicando cambios en
el atributo flex correspondiente


- Código:

```tsx
const Box = (props: Props) => {
  const { color } = props;

  const [flex, setFlex] = useState(0);
  function changeFlexStyle(flexLevel : number) {
    if (flexLevel < 0){
      return;
    }
    setFlex(flexLevel);
  }

  return (
    <View style={{...styles.box, backgroundColor:color, flex:flex}}>
      <Button color={"red"} title='Flex +1' onPress={() => changeFlexStyle(flex+1)}></Button>
      <Button title='Flex -1' onPress={() => changeFlexStyle(flex-1)}></Button>
      <Text>Flex: {flex}</Text>
    </View>
  )
}

const BoxContainer05 = () => {
    const colors = ["red", "lightblue", "lightgreen"];

    return (
    <View style={styles.container}>
        {
            colors.map((colorItem, index) => (
                <Box05 key={index} color={colorItem}/>
            ))
        }  
    </View>
    )
}
```

***
</br>



### Práctica 06

> 📂
> Sustituir los botones por un objeto TouchableHighlight para
el botón: flex+1 que cuando se puse abra una alerta e incremente la
propiedad flex, y un objeto TouchableOpacity para el botón: flex-1 que
decremente la propiedad flex. Personalizar los estilos de esos dos objeto


- Código:

```tsx
const Box06 = (props: Props) => {
  const { color } = props;

  const [flex, setFlex] = useState(0);
  function changeFlexStyle(flexLevel : number) {
    if (flexLevel < 0){
      return;
    }

    setFlex(flexLevel);
    Alert.alert('changed flex to: ' + flexLevel);
  }

  return (
    <View style={{...styles.box, backgroundColor:color, flex:flex}}>
      <TouchableHighlight onPress={() => changeFlexStyle(flex+1)}>
        <View style={styles.button}>
          <Text> Flex +1 </Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => changeFlexStyle(flex-1)}>
        <View style={styles.button}>
          <Text> Flex -1</Text>
        </View>
      </TouchableOpacity>
      <Text>Flex: {flex}</Text>
    </View>
  )
}
```



***
</br>


### Práctica 07

> 📂
> Obtener el renderizado anterior, consiguiendo enviar mediante props, tanto el
nombre de la Caja.tsx como estilos personalizados que sobreescriban/agreguen a los que
estén por defecto (observar que Caja B tiene bordes redondeados )


- Código:

```tsx
type Props = {
  nameBox : string;
  stylesBox : any;
}

const Box07 = (props: Props) => {
  const { nameBox, stylesBox: styleBox } = props;

  const [flex, setFlex] = useState(0);
  function changeFlexStyle(flexLevel : number) {
    if (flexLevel < 0){
      return;
    }

    setFlex(flexLevel);
    Alert.alert('changed flex to: ' + flexLevel);
  }

  return (
    <View style={{...styles.box, ...styleBox, flex:flex}}>
      <TouchableHighlight onPress={() => changeFlexStyle(flex+1)}>
        <View style={styles.button}>
          <Text> Flex +1 </Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => changeFlexStyle(flex-1)}>
        <View style={styles.button}>
          <Text> Flex -1</Text>
        </View>
      </TouchableOpacity>
      <Text>{nameBox}</Text>
      <Text>Flex: {flex}</Text>
    </View>
  )
}

type BoxData= {
    nameBox: string;
    stylesBox: any;
}
const BoxContainer07 = () => {
    const names = ["Box A", "Box B", "Box C"];
    const colors = ["red", "lightblue", "lightgreen"];

    const arrData : BoxData[] = [
        {
            nameBox: names[0],
            stylesBox: { 
                flex: 0,
                backgroundColor: colors[0],
                padding: 10,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }, 
        {
            nameBox: names[1],
            stylesBox: { flex: 0,
                backgroundColor: colors[1],
                padding: 10,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        {
            nameBox: names[2],
            stylesBox: { flex: 0,
                backgroundColor: colors[2],
                padding: 10,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
    ]
    

    return (
    <View style={styles.container}>
        {
        
            arrData.map((box, index) =>(
                <Box05 key={index} stylesBox={box.stylesBox} nameBox={box.nameBox} />

            ))

        }  
    </View>
    )
}
```





***
</br>

### Práctica 08

> 📂
> Obtener el renderizado anterior, empezando por no tener ningún círculo. A
medida que se pulsa el botón: Agregar Círculo, irán apareciendo. Observar que los colores
van variando progresivamente. Se empieza con un: rgb(red,green,blue) y según el número
de id que corresponda va variando un poco más ( tener en cuenta que los colores van de 0
a 255 no se puede superar ) Los dos botones cambian entre: wrap /nowrap y entre:
column/row. El renderizado que se muestra tiene: flexDirection: ‘row’, flexWrap: 'wrap'.
Observar que dos de los botones tienen estilos, así que no usaremos Button con ellos. Se
propone TouchableOpacityObtener el renderizado anterior, consiguiendo enviar mediante props, tanto el
nombre de la Caja.tsx como estilos personalizados que sobreescriban/agreguen a los que
estén por defecto (observar que Caja B tiene bordes redondeados )


- Código:

```tsx
type Props = {
  nameBox : string;
  red : number;
  green : number;
  blue : number;
}

const Box08 = (props: Props) => {
  const { nameBox, red, green, blue} = props;



  return (
    <View
      style={[styles.circle,
        {
          backgroundColor:`rgb(${red}, ${green}, ${blue})`,
        },
      ]}
    >
      <Text style={styles.circleText}>{nameBox}</Text>
    </View>

  )
}


/**
 * Type definition for the data structure representing a circle
 */
type DataCircle = {
  name: string;
  red : number;
  green : number;
  blue : number;
}

/**
 *  Type definition for the flex directions values 
 */

type DirectionType = "row" | "row-reverse" | "column" | "column-reverse";

/**
 *  Type definition for the wrap values 
 */
type WrapType= "wrap" | "no-wrap" | "wrap-reverse";

const Practice08Screen = (props: Props) => {

  /**
   * UseStates
   */
  const [direction, setDirection] = useState<DirectionType>("row");
  const [wrap, setWrap] = useState<WrapType>("wrap");
  const [circleArr, setCircleArr] = useState<DataCircle[]>([]);


  /**
   * Function to add a circle to the array of circles
   */
  function addCircle(){
    const lastCircle = circleArr[circleArr.length - 1] || {
      red: 50,
      green: 70,
      blue: 100,
    };

    setCircleArr([...circleArr, 
      {
        name: 'B'+(circleArr.length+1),
        red: (lastCircle.red + 25) % 256,
        green: (lastCircle.green + 35) % 256,
        blue: (lastCircle.blue + 55) % 256,
      }
    ]);
  }

  /**
   * Function to change the wrap property of the container
   */
  const changeWrap = () => {
    const options: WrapType[] = ["wrap", "no-wrap", "wrap-reverse"];
    const nextOptionPos = (options.indexOf(wrap!) + 1) % options.length;
    setWrap(options[nextOptionPos]);
  };

  
  /**
   * Function to change the flex direction property of the container
   */
  const changeRow = () => {
    const options: DirectionType[] = ["row", "column", "row-reverse", "column-reverse"];
    const nextOptionPos = (options.indexOf(direction!) + 1) % options.length;
    setDirection(options[nextOptionPos]);
  };

  return (
    <View style={styles.mainContainer}>
      

      <Button title='Add circle' onPress={addCircle}/>
      <TouchableOpacity onPress={()=> changeWrap()}> 
        <Text style={styles.btnwrap}>Change Wrap (Click here)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> changeRow()}> 
        <Text style={styles.btnrow}>Change Row (Click here)</Text>
      </TouchableOpacity>
 
      <View
        style={{...styles.container,
                  flexDirection: direction ?? "row",
                  flexWrap: wrap === "no-wrap" ? "nowrap" : wrap ?? "wrap",
        }}
      >
        {circleArr.map((circle, index) => (
            <Box08 key={index} nameBox={circle.name} red={circle.red} green={circle.green} blue={circle.blue}/>
        ))}
        
      </View>

    </View>
  )
}

```

***
</br>

### Práctica 09

> 📂
> Obtener renderizado parecido al anterior. Las imágenes pueden ser otras.
Debe funcionar el onChangeText para cambiar justifyContext y los botones para
alignContext. Una de las imágenes se guardará en una carpeta: img y se cargará con:
require().
Cuidado! NO poner wrap. Debemos establecer nowrap, o al hacer aignItems se ubicará
según el tamaño del objeto más grande de la columna, en lugar de respecto a su
contenedor


- Código:

```tsx
/**
 *  Type definition for the flex directions values (justifycontent)
 */

type PrimaryAlignment = "space-around" | "space-between" | "space-evenly" |  "center" | "flex-start" | "flex-end";

/**
 *  Type definition for the secondary alignment values  (alignitems)
 */
type SecondaryAlignment = "stretch" | "center" | "flex-start" | "flex-end";

const Practice09Screen = (props: Props) => {

  /**
   * UseStates
   */
  const [primaryAlignment, setPrimaryAlignment] = useState<PrimaryAlignment>('space-around');
  const [secondaryAlignment, setSecondaryAlignment] = useState<SecondaryAlignment>('flex-end');

  function modifyPrimaryAlignment(primaryAlignment: string){
    switch(primaryAlignment.toLocaleLowerCase()){
      case "center":
        setPrimaryAlignment('center');
        return;
      case "flex-start":
        setPrimaryAlignment('flex-start');
        return;
      case "flex-end":
        setPrimaryAlignment('flex-end');
        return;
      case "space-around":
        setPrimaryAlignment('space-between');
      return;
      case "space-between":
        setPrimaryAlignment('space-around');
        return;
      case "space-evenly":
        setPrimaryAlignment('space-evenly');
        return;
    }
  }

  function modifySecondaryAlignment(secondaryAlignment: string){
    switch(secondaryAlignment){
      case "stretch":
        setSecondaryAlignment('stretch');
        return;
      case "center":
        setSecondaryAlignment('center');
        return;
      case "flex-start":
        setSecondaryAlignment('flex-start');
        return;
      case "flex-end":
        setSecondaryAlignment('flex-end');
        return;
    }
  }
  return (
    <View style={styles.mainContainer}>
        <TextInput style={styles.input} placeholder='Primary alignment' onChangeText={modifyPrimaryAlignment} />
      <View>
        <ButtonContainer modifySecondaryAlignment={modifySecondaryAlignment}/>
      </View>
      <View style={{...styles.container,
                      justifyContent: primaryAlignment,
                      alignItems: secondaryAlignment,
                    }}>
            <Image source={require('../assets/img1.png')} style={styles.img}/>
            <Image source={require('../assets/img2.png')} style={styles.img}/>
            <Image source={require('../assets/img3.png')} style={styles.img}/>
      </View>

    </View>
  )
}

const ImgContainer = () => {
    return (
        <View style={{display:'flex', flexWrap:'nowrap', gap:10}}>
            <Image source={require('../assets/img2.png')} style={styles.img}/>
            <Image source={require('../assets/img2.png')} style={styles.img}/>
            <Image source={require('../assets/img3.png')} style={styles.img}/>
        </View>
    )
}

type Props = {
    modifySecondaryAlignment : Function;
}


const ButtonContainer = (props: Props) => {
    const { modifySecondaryAlignment } = props;

    return (
        <View style={{display:"flex", flexDirection:'row', alignItems:"flex-start", flexWrap:"wrap", gap:'15'}}>
            <Button title='STRETCH' onPress={()=> modifySecondaryAlignment("strecth")}/>
            <Button title='CENTER' onPress={()=> modifySecondaryAlignment("center")}/>
            <Button title='FLEX-START' onPress={()=> modifySecondaryAlignment("flex-start")}/>
            <Button title='FLEX-END' onPress={()=> modifySecondaryAlignment("flex-end")}/>
        </View>
    )
}
```

***
</br>

### Práctica 09.1

> 📂
> Hacer la calculadora descritaTomar varias imágenes y que se muestre al pulsar un botón una u otra de ellas de forma aleatoria. Haciendo uso de una estructura similar al AlmacenImg[] que acabamos de mostrar como ejemplo


- Código:

```tsx

const Practice091Screen = (props: Props) => {

  /**
   * UseStates
   */
  const [rndIndex, setRndIndex] = useState(0)

  const storedImages: storeImg[] = [
    {name: 'img1', location: require('../assets/img1.png')},
    {name: 'img2', location: require('../assets/img2.png')},
    {name: 'img3', location: require('../assets/img3.png')},
    {name: 'img4', location: require('../assets/img4.png')},

  ]


  function getRequire(index: number){
    const obtained = storedImages[index];

      if(obtained){
        return obtained.location;
      } else {
        return "";
      }  
  }



  return (
    <View style={styles.mainContainer}>
      <Button title='Change to rnd Image' onPress={() => 
                setRndIndex(Math.trunc(Math.random() * storedImages.length))}/>
      <Image source={
            getRequire(rndIndex)
            }
            style={{ minWidth: 50, height: 50, width: 'auto'}}
            alt='not found'/>
    </View>
  )
}
```

***
</br>


### Práctica 10

> 📂
> Hacer la calculadora descrita


### Práctica 11

> 📂
> Hacer un hook personalizado para la calculadora que tenga todo el código que
está fuera del return del component


- Código:

```tsx
type Props = {
    btnValue: string;
    bgColor: string;
    textColor: string;
    width: number;
    modifyParent: (selected: string) => void;
}



const Button10 = (props: Props) => {
    const { btnValue: value, bgColor, textColor, width, modifyParent } = props;


    function handlePress(btnValue: string) {
        modifyParent(btnValue);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => handlePress(value)}>
                <Text style={{
                    ...styles.btn, backgroundColor: bgColor, color: textColor,
                    width: width
                }}>
                    {value}
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const Practice10Screen = (props: Props) => {
  const {result, history, auxHistory, modify} = UseCalc();
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
      <View style={{flex:1, flexDirection:'column-reverse'}}>
        <View style={{flex:1, flexDirection:'column-reverse', padding:10}}>

            <Text style={styles.text} adjustsFontSizeToFit={true} numberOfLines={1}> 
                {result} 
            </Text>
            <Text style={styles.historyText} adjustsFontSizeToFit={true} numberOfLines={1}> 
                  {auxHistory} 
            </Text>
        </View>
      </View>
      <View style={{flex:1}}>
        <View style={{flex:1, flexDirection:'row', columnGap:'1', margin:10}}>
          <Button10 btnValue={'AC'} bgColor='lightgrey' textColor='black' width={60} modifyParent={modify}/>
          <Button10 btnValue={'+/-'} bgColor='lightgrey' textColor='black' width={60} modifyParent={modify}/>
          <Button10 btnValue={'DL'} bgColor='lightgrey' textColor='black' width={60} modifyParent={modify}/>
          <Button10 btnValue={'/'} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
        <View style={{flex:1, flexDirection:'row', columnGap:'1',  margin:10}}>
          <Button10 btnValue={'7'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'8'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'9'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'x'} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
        <View style={{flex:1, flexDirection:'row', columnGap:'1',  margin:10}}>
          <Button10 btnValue={'4'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'5'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'6'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'-'} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
        <View style={{flex:1, flexDirection:'row', columnGap:'1',  margin:10}}>
          <Button10 btnValue={'1'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'2'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'3'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'+'} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
        <View style={{flex:1, flexDirection:'row', columnGap:'1',  margin:10}}>
          <Button10 btnValue={'0'} bgColor='grey' textColor='white' width={150} modifyParent={modify}/>
          <Button10 btnValue={'.'} bgColor='grey' textColor='white' width={60} modifyParent={modify}/>
          <Button10 btnValue={'='} bgColor='orange' textColor='white' width={60} modifyParent={modify}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const UseCalc = () => {

    /**
     * UseStates
     */
    const [result, setResult] = useState<string>("0");
    const [history, setHistory] = useState<string>("")
    const [auxHistory, setAuxHistory] = useState<string>("");
    const [operatorChosen, setOperator] = useState<string>("");

    /**
     * Other properties
     */
    const [firstInput, setFirstInput] = useState<boolean>(true)

    function changePosNeg(num: number) {
        return (num * -1);
    }

    function modify(selected: string) {
        if (!isNaN(parseFloat(selected))) {
            if (firstInput) {
                setResult("");
                setFirstInput(false);
            }

            const aux = parseFloat(result + selected);
            setResult("" + aux);

        } else if (selected === "." && !result.includes(".")) {
            const aux = result + selected;
            setResult(aux);
        } else {
            selectOperator(selected);
        }

    }

    function selectOperator(operator: string) {
        switch (operator) {
            case 'AC':
                setHistory('');
                setAuxHistory('');
                setResult('0');
                return;
            case '+/-':
                setResult(changePosNeg(parseFloat(result)).toString());
                return;
            case 'DL':
                handleDelete();
                return;
            case '/':
                if (operatorChosedBefore()) {
                    return;
                }
                setHistory(result);
                setAuxHistory(result);
                setResult('0');
                setOperator(operator);
                return;
            case 'x':
                if (operatorChosedBefore()) {
                    return;
                }

                setHistory(result);
                setAuxHistory(result);
                setResult('0');
                setOperator("x");
                return;
            case '+':
                if (operatorChosedBefore()) {
                    return;
                }

                setHistory(result);
                setAuxHistory(result);
                setResult('0');
                setOperator("+");
                return;
            case '-':
                if (operatorChosedBefore()) {
                    return;
                }

                setHistory(result);
                setAuxHistory(result);
                setResult('0');
                setOperator("-");
                return;

            case '=':
                if (operatorChosen === '') {
                    return;
                }

                const operationResult = calculateResult(operatorChosen);
                
                if (operationResult !== 0){
                    setHistory(operationResult.toString());
                    setAuxHistory(history + " " + operatorChosen+ " " + result + " = " + operationResult.toString());
                    setResult(operationResult.toString());
                } else {
                    setHistory("");
                }

                setOperator("");
                return;
        }

        function operatorChosedBefore() {
            if (operatorChosen !== '') {
                const operationResult = calculateResult(operatorChosen);

                if (operationResult !== 0 || isNaN(operationResult)){
                    setHistory(operationResult.toString());
                    setAuxHistory(history + " " + operatorChosen+ " " + result + " = " + operationResult.toString());
                    setResult(operationResult.toString());
                    setOperator('');
                } 

                return true;
            }

            return false;
        }


        function calculateResult(operator: string): number {
            let auxResult: number = 0;
            let auxFinal = 0;
            switch (operator) {
                case "+":
                    auxResult = parseFloat(history) + parseFloat(result);
                    auxFinal = auxResult;
                    break;
                case "-":
                    auxResult = parseFloat(history) - parseFloat(result);
                    auxFinal = auxResult;
                    break;
                case "x":
                    auxResult = parseFloat(history) * parseFloat(result);
                    auxFinal = auxResult;
                    break;
                case "/":
                    if (parseFloat(result) === 0){
                        Alert.alert("Invalid operation");
                        auxFinal = parseFloat(result);
                    } else {
                        auxResult = (parseFloat(history)) / (parseFloat(result));
                        auxFinal = auxResult;
                    }

                    break;
            }

            return auxFinal;
        }


        function handleDelete() {
            if (result === '0' || result === '') {
                return;
            }

            const aux = result.toString().slice(0, -1);
            if (result.includes('-') && result.length == 2) {
                setResult('0');
                return;
            }

            setResult(aux);
        }

    }
    return {
        result,
        history,
        auxHistory,
        modify
    }

}
```

</br>

### Práctica 12

> 📂
> Hacer un hook personalizado para la calculadora que tenga todo el código que
está fuera del return del componentReproducir el ejemplo anterior, generando una pantalla específica, pero le
haremos algunas diferencias. El botón dirá: “cambiar de color” entonces se genera un
color aleatorio a mostrar ( puede ser de un array previamente generado de colores:
“gray”, “blue”,... ) y se le muestra una alerta al usuario diciendo cuál es el color que se va
a poner de background de la pantalla. Si pulsa ok se cambia el fondo, si pulsa cancel se mantiene el previo


- Código:

```tsx
const Practice12Screen = (props: Props) => {

    const [currentBgColor, setCurrentBgColor] = useState<string>('red')
    const colors = ['red', 'green', 'yellow', 'blue'];

    function showAlert() {
        Alert.alert(
            'Color change', 'Change background color to other',
            [
                {
                    text: `Current color: ${currentBgColor}`,
                    onPress: () => console.log('keep current color'),
                },
                {
                    text: 'Change to other',
                    onPress: () => changeBackgroundColor(),
                }

            ]
        );
    }

    function changeBackgroundColor(): void {
        
        let aux = currentBgColor;
        
        while(aux === currentBgColor){
            let rndPos = Math.trunc(Math.random() * colors.length);
            aux = colors[rndPos];
        }


        setCurrentBgColor(aux);
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, backgroundColor:currentBgColor}}>
                <Button title='Change background color'onPress={showAlert}/>
            </View>
        </SafeAreaView>
    )
}

export default Practice12Screen
```

***
</br>

### Práctica 13

> 📂
> Usar el prompt descrito para recrear el ejercicio anterior del color de fondo.
Ahora en lugar de una alerta se mostrará un prompt para que el usuario introduzca un color
de fondo en lugar de uno aleatorio.
Nota: es posible que de error si se instala con la app ya lanzada. En ese caso parar metro y
volver a lanzar


- Código:

```tsx
const Practice13Screen = (props: Props) => {

    const [currentBgColor, setCurrentBgColor] = useState<string>('red')
    const colors = ['red', 'green', 'yellow', 'blue'];

    function showAlert() {
        prompt(
            'Change background color to other',
            'Select a color by name',
            [
                {text: 'Cancel'},
                {text: 'OK', onPress: () => changeBackgroundColor()},
            ]
        )

        
    
    }

    function changeBackgroundColor(): void {
        
        let aux = currentBgColor;
        
        while(aux === currentBgColor){
            let rndPos = Math.trunc(Math.random() * colors.length);
            aux = colors[rndPos];
        }


        setCurrentBgColor(aux);
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, backgroundColor:currentBgColor}}>
                <Button title='Change background color'onPress={showAlert}/>
            </View>
        </SafeAreaView>
    )
}
```





***
</br>

### Práctica 14

> 📂
> Reproducir el ejemplo anterior, poniendo en el pulsador ( la bola ) los
colores si falso: brown, si verdadero: orange No aplicar los otros dos colores del
ejemplo El switch debe valer para poner un borde a toda la pantalla de color rojo o
quitarle el borde


- Código:

```tsx
const Practice14Screen = (props: Props) => {

    const [currentBgColor, setCurrentBgColor] = useState<string>('blue')
    const colors = ['red', 'green', 'yellow', 'blue'];

    const [active, setActive] = useState<boolean>(false);


    function changeBackgroundColor(): void {
        let aux = currentBgColor;
        
        while(aux === currentBgColor){
            let rndPos = Math.trunc(Math.random() * colors.length);
            aux = colors[rndPos];
        }
        setCurrentBgColor(aux);
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={
                    {   
                        flex:1, backgroundColor:'white', alignItems:'center', 
                        justifyContent:'center',
                    }
                }

            >
            <Switch
                trackColor={{false:'brown', true:'red'}}
                onValueChange={()=> setActive(!active)}
                value={active}
            />
            </View>
        </SafeAreaView>
    )
}
```

</br>


### Práctica 15

> 📂
> Reproducir el ejemplo anterior, completando lo que falta (poniendo el switch
de: casado )


- Código:

```tsx
type FormData = {
    jubilado: boolean,
    casado: boolean,
    edad: number,
    nombre:string
}

const Practice15Screen = (props: Props) => {
    const [formData, setFormData] = useState<FormData>({} as FormData);

    function fillFormData (value : boolean|number|string, field: keyof FormData){
        setFormData(
            {   
                ...formData, 
                [field]: value 
            }
        );
    } 
    
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Text style={{color:'white'}}>Jubilado: {formData.jubilado? 'Si' : 'No'}
                    <Switch
                        onValueChange={()=> fillFormData(!formData.jubilado, 'jubilado')}
                        value={formData.jubilado}
                    />
                </Text>
                <Text style={{color:'white'}}>Casado: {formData.casado? 'Si' : 'No'}
                    <Switch
                        onValueChange={()=> fillFormData(!formData.casado, 'casado')}
                        value={formData.casado}
                    />
                </Text>
                <TextInput placeholder='nombre' onChangeText={(text)=>fillFormData(text, 'nombre')}/>
                <TextInput placeholder='edad' onChangeText={(text)=>fillFormData(text, 'edad')}/>
                <Text style={{color:'white'}}>{JSON.stringify(formData)}</Text>
            </View>
        </SafeAreaView>
    )   
}
```

***
</br>


### Práctica 16

> 📂
> Reproducir el ejemplo anterior, reemplazando el array de personas por uno
de productos donde se quiere ver el nombre del producto, el precio y el stock. No debe
haber separador. Dale un estilo personalizado a los items ( observa que en cada item
viene un atributo index ) y muestra un color de fondo para los items impares y otro
distinto para los pares. Pon centrado y más grande la cabecera y que diga: Lista
Productos. Nota: renderItem((p)=> p.item //objeto, p.index //posición en el array


- Código:

```tsx

type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
}
const Practice16Screen = (props: Props) => {

    const array: Product[] = [
        { id: 1, name: 'Producto 1', price: 100, stock: 50 },
        { id: 2, name: 'Producto 2', price: 200, stock: 30 },
        { id: 3, name: 'Producto 3', price: 300, stock: 20 },
        { id: 4, name: 'Producto 4', price: 400, stock: 10 },
        { id: 5, name: 'Producto 5', price: 500, stock: 0 },
        { id: 6, name: 'Producto 6', price: 600, stock: 40 },
        { id: 7, name: 'Producto 7', price: 700, stock: 15 },
        { id: 8, name: 'Producto 8', price: 800, stock: 35 },
    ];


    return (
        <SafeAreaView style={styles.bgColor}>
            <View style={{flex:1}}>
                <FlatList 
                data={array}
                renderItem={(p) => { 
                    return (
                        p.index % 2 === 0 ?
                        <View style={styles.items}>
                            <Text>{JSON.stringify(p)}</Text>
                        </View>
                        :
                        <View style={{...styles.items, backgroundColor: 'lightgray'}}>
                            <Text>{JSON.stringify(p)}</Text>
                        </View>
                    )
                }}
                keyExtractor={ (item, index) => item.name + index}
                ListHeaderComponent={() => <Text style={styles.text}>Lista de Productos</Text>}                
                />     
            </View>
        </SafeAreaView>

    )
}
```





***
</br>



### Práctica 17

> 📂
> Basándose en el ejemplo de formulario que hemos hecho, vamos a realizar
ejercicio de cálculo de imc. Estará el componente: CardPersona.tsx que contendrá el
formulario para imc (id, nombre, altura, peso ) y el componente padre que mostrará la
lista de cards una debajo de otra. Habrá un botón con title: “+” para crear cada nuevo
CardPersona. Habrá en cada card un botón para poder borrar la persona de la lista
Nota: observar que en el padre únicamente se precisa el tamaño del array ( que se obtiene
al pulsar el botón y además genera el id que se pasa por props). Así que modificar el state
de la card no tiene por qué modificar el state de la lista de cards. Otra cosa es el botón
eliminar, que sí debe afectar al state del padre.


- Código:

```tsx
type Props = {
    person : Person;
    modifyPerson : (person: Person) => void;
}

type Person = {
    id: number,
    name: string,
    heigth: number,
    weight: number,
}

const PersonCard = (props: Props) => {
    const { person } = props;

    const [imc, setimc] = useState(0)
    const [formData, setFormData] = useState<Person>({} as Person);


    useEffect(() => {
        
    }, [person])

    function calculateIMC(){
        if(formData.weight && formData.heigth){
            setimc(formData.weight / ((formData.heigth)**2)*1000);
        }
    }

    function fillFormData (value : number|string, field: keyof Person){
        setFormData(
            {   
                ...formData, 
                [field]: value 
            }
        );
    } 

    return (
        <View style={styles.card}>
            <TextInput style={styles.input} placeholder='name' onChangeText={(text)=>fillFormData(text, 'name')}/>
            <TextInput style={styles.input} placeholder='weight' onChangeText={(text)=>fillFormData(parseFloat(text), 'weight')}/>
            <TextInput style={styles.input} placeholder='heigth' onChangeText={(text)=>fillFormData(parseFloat(text), 'heigth')}/>
            <Text style={styles.text}>IMC: {imc}</Text>
            <View>
                <TouchableOpacity onPress={calculateIMC} style={styles.btn}>
                    <Text>Calculate IMC</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

type Person = {
    id: number,
    name: string,
    heigth: number,
    weight: number,
}

const Practice17Screen = (props: Props) => {
    const [personList, setPersonList] = useState<Person[]>([]);

    useEffect(() => {

    }, [personList]);
    
    function addPerson () : void {  
        setPersonList([...personList, {} as Person]);
    };

    
    function modifyPerson (person : Person) : void {
        let arrAux = personList;
        arrAux[person.id-1] = person;
        setPersonList([...arrAux]);
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={{flex:1}}>
                <Text>IMC Calculator</Text>
                <TouchableOpacity onPress={() => addPerson()}>
                    <Text style={{textAlign:'center', borderRadius:50, borderColor:'black'}}>+</Text>
                </TouchableOpacity>
                    {personList.map((item, index) => (
                            <PersonCard key={index} 
                            modifyPerson={modifyPerson} person={item}/>
                        )
                    )}
            </View>        
        </SafeAreaView>
    )
}
```





***
</br>

### Práctica 18

> 📂
> Crear una pantalla con un TextiInput un button y un view para hacer una
especie de diario.
Cuando el usuario escribe un texto y pulsa en el botón aparece en el view el texto
introducido con la fecha ( incluye segundos ) y un smile que describa las emociones
escritas en el texto. Así si el usuario ha incluido entre su texto: “:-)” entonces aparecerá
una imagen ( icono ) de sonrisa al lado del texto escrito del usuario. Si escribe: “:-(“ lo
mismo pero triste


- Código:

```tsx
const Practice18Screens = (props: Props) => {
    const [inputContent, setInputContent] = useState<String>("");
    const [history, setHistory] = useState<String[]>([]);
    const emojis : string[] = [':-(',':-)'];    

    function handlePress(){
        let aux = inputContent +  "-- " + Date.now();
        setInputContent(aux);
        setHistory([...history, inputContent ]);
        setInputContent("");
    }
    
    function checkContents(value : String) : number{
        if (value.includes(emojis[0])){
            return 1;
        } 

        if (value.includes(emojis[1])){
            return -1;
        }

        return 0;
    }

    return (
        <View>
            <TextInput placeholder='Insert any text' onChangeText={(e) => setInputContent(e)}/>
            <Button title="Submit" onPress={handlePress}/>

            {
                history.map((item, index) => (
                    <View>
                    { checkContents(item) === 1 &&
                        <View>
                            <Text key={index}>{item}</Text>
                            <Icon name="sad-outline" size={50}></Icon>
                        </View>
                    }
                    { checkContents(item) === -1 &&
                        <View>
                            <Text key={index}>{item}</Text>
                            <Icon name="happy-outline" size={50}></Icon>
                        </View>
                    }
                    { checkContents(item) === 0 &&
                        <Text key={index}>{item}</Text>
                    }

                    </View>
                    
                ))
            }
        </View>
    )
}
```


***
</br>



### Práctica 19

> 📂
> Conversor de iconos smiles a texto. Esta otra pantalla tiene en la parte
superior varios iconos ( uno para sonrisa, otro para tristeza, etc ) El usuario va
escribiendo en un TextInput un texto y quiere agregar en formato texto el smile. Para que
no tenga que conocerlo, basta que en ese momento pulse en el icono correspondiente y le
aparecerá agregado al final de su texto, el texto smile correspondiente

- Código:

```tsx

const Practice19Screen = (props: Props) => {
    const [inputContent, setInputContent] = useState<string>("");
    const emojis : string[] = [':-(',':-)'];    

    function handlePress(value: string){
        
        let aux = inputContent;
        switch (value) {
            case 'happy':
                aux += " " + emojis[1];
                setInputContent(aux);
                return;
        
            case 'sad':
                aux += " " + emojis[0];
                setInputContent(aux);
                return;   
            default:
                return;
        }
    }

    return (
        <View style={{flex:1}}>
            <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity onPress={() => handlePress('happy')} style={{width:50}}>
                    <Icon name="happy-outline" size={50}></Icon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('sad')} style={{width:50}}>
                    <Icon name="sad-outline" size={50}></Icon>
                </TouchableOpacity>
            </View>
            <TextInput placeholder='Insert any text' value={inputContent} onChangeText={(e) => setInputContent(e)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10}} 
            />
        </View>
    )
}

```


***
</br>


### Práctica 20

> 📂
> Reproducir el anterior ejemplo de Stack.Navigator con HomeScreen.

- Código:

```tsx


type PrincipalStackParamList = {
    Home: undefined,
    Profile: undefined,
    Extra: {message: string, icon : string},
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'Extra'>;


const ExtraScreen = (props: PropsProfile) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Extra Screen</Text>
            <Text>Message received: {props.route.params.message}</Text>
            <Icon name={`${props.route.params.icon}-outline`} size={50} color={'blue'} />
            <Button title="Go to Home" 
                onPress={() => props.navigation.navigate('Home')}/>
            <Button title="Go to Profile" 
                onPress={() => props.navigation.navigate('Profile')}/>
        </View>
    )
}

type PrincipalStackParamList = {
    Home: undefined,
    Profile: undefined,
    Extra: {message: string, icon : string},
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'Home'>;

const HomeScreen = (props: PropsHome) => {

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Home Screen</Text>
            <Button title="Go to Profile" 
                onPress={() => props.navigation.navigate('Profile')}/>
            <Button title="Go to Extra" 
                onPress={() => props.navigation.navigate('Extra', {message: "Greetings from Home", icon : "home"})}/>
            <Icon name='car-outline' size={50} color={'blue'} />
        </View>
    )
}

type PrincipalStackParamList = {
    Home: undefined,
    Profile: undefined,
    Extra: {message: string, icon: string},
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'Profile'>;


const ProfileScreen = (props: PropsProfile) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>ProfileScreen</Text>
            <Button title="Go to Home" 
                onPress={() => props.navigation.navigate('Home')}/>
            <Button title="Go to Extra" 
                onPress={() => props.navigation.navigate('Extra', {message: "Greetings from Profile", icon: "person"})}/>
        </View>
    )
}
```




***
</br>


### Práctica 21

> 📂
> Reproducir el anterior ejemplo con tres Screen en el navigator. Poner un
TextInput en PrimeraScreen para que el usuario introduzca un nombre. Cuando el
usuario pulse el botón que lo lleva a TeceraScreen, el texto introducido en el TextInput se envía como parámetro a TerceraScreen y allí dira: “Saludos nombreusuario. Bienvenido!” Como sabemos, intentamos dejar nuestro componente App.tsx bastante limpio. Crear un nuevo componente: src/navigation/StackNavigation.tsx y trasladar todo el código de la navegación. De tal forma que nuestro
App.tsx quede únicamente:

- Código:

```tsx
type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
    ThirdScreen: {message : string, icon:string},
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalStack = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false,contentStyle:{backgroundColor:'lightblue'}}}
        
        >
            <Stack.Screen name="FirstScreen" component={FirstScreen21} />
            <Stack.Screen name="SecondScreen" component={SecondScreen21} />
            <Stack.Screen name="ThirdScreen" component={ThirdScreen21} />
        </Stack.Navigator>
    )
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'FirstScreen'>;

const FirstScreen21 = (props: PropsHome) => {
    const [name, setName] = useState('');

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>First Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button title="Go to second screen" 
                onPress={() => props.navigation.navigate('SecondScreen')}/>
            <Button title="Go to third screen" 
                onPress={() => props.navigation.navigate('ThirdScreen', {message: `Greetings ${name}!`, icon : "home"})}/>
            <Icon name='car-outline' size={50} color={'blue'} />
        </View>
    )
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'SecondScreen'>;


const SecondScreen21 = (props: PropsProfile) => {
    const [name, setName] = useState('');
    
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Second Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button title="Go to first screen" 
                onPress={() => props.navigation.navigate('FirstScreen')}/>
            <Button title="Go to third screen" 
                onPress={() => props.navigation.navigate('ThirdScreen', {message: `Greetings ${name}!`, icon : "home"})}/>
        </View>
    )
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'ThirdScreen'>;

const ThirdScreen21 = (props: PropsProfile) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Third Screen</Text>
            <Text>Message received: {props.route.params.message}</Text>
            <Icon name={`${props.route.params.icon}-outline`} size={50} color={'blue'} />
            <Button title="Go to first screen" 
                onPress={() => props.navigation.navigate('FirstScreen')}/>
            <Button title="Go to second screen" 
                onPress={() => props.navigation.navigate('SecondScreen')}/>
        </View>
    )
}

```





***
</br>

### Práctica 22

> 📂
> Reproducir el anterior ejemplo con dos Screen en el navigator. Cambiar el
color de fondo del header ( a uno de tu elección). Poner en blanco el color del título. Que
no se muestre el headerBack ( establecerlo a false.Nota: según el emulador se podrá aún
regresar arrastrando desde el extremo de la derecha hacia la izquierda. En otros
emuladores quizás no se pueda regresar). Alinear el título en el centro y pon tu nombre en
el título

- Código:

```tsx

type PrincipalStackParamList = {
    FirstScreen: undefined,
    SecondScreen: undefined,
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const PrincipalStack22 = (props: Props) => {
    return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#008080',
            },
            headerTintColor: 'white', 
            headerTitleAlign: 'center',
            headerBackVisible: false,
        }}
        >
        <Stack.Screen name="FirstScreen" component={FirstScreen22} options={{ title: 'Nabil' }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen22} options={{ title: 'Nabil' }} />
    </Stack.Navigator>
    )
}

type PropsHome = NativeStackScreenProps<PrincipalStackParamList, 'FirstScreen'>;

const FirstScreen22 = (props: PropsHome) => {

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>First Screen</Text>
            <Button title="Go to second screen" 
                onPress={() => props.navigation.navigate('SecondScreen')}/>
        </View>
    )
}

type PropsProfile = NativeStackScreenProps<PrincipalStackParamList, 'SecondScreen'>;


const SecondScreen22 = (props: PropsProfile) => {
    
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Second Screen</Text>
            <Button title="Go to first screen" 
                onPress={() => props.navigation.navigate('FirstScreen')}/>

        </View>
    )
}
```

***
</br>

### Práctica 23

> 📂
> Vamos a hacer el clásico: todo list
Aparecerán 2 pantallas, una
con la lista de tareas. En cada
fila del flatlist se puede pulsar
sobre el check y que quede
marcada como realizada o no
( observar que si está finalizada
el texto queda tachado y
cambia el icono ) al hacer click
sobre el icono de editar nos
lleva a la segunda pantalla y
modificamos el asunto y si está
o no realizada. Si se pulsa
sobre el icono de papelera
borra la tarea. El botón más:
“+” nos lleva a la segunda
pantalla para crear una nueva
tarea ( los ids se generan
automáticamente y el usuario
no los puede editar )
Buscar por: “options” en Statck.Screen allí podemos poner opciones muy similar a:
screenoptions de Stack.Navigator, pero adicionalmente puede tratar con parámetros de la
ruta y así mostrar el id de la tarea en el título
Se debe generar un contexto donde se guardará el state de la lista de ToDos y su
correspondiente setter.

- Código:

```tsx

type TaskListContextType ={
    tasks: Task[],
    setTasks: (tasks: Task[]) => void,
    nextID: number,
    setNextID: (num : number) => void
}

type Task = {
    id: number,
    content: string,
    completed: boolean,
}



export const TasksContext = createContext<TaskListContextType >({} as TaskListContextType );

const TaskListContext = (props: Props) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [nextID, setNextID] = useState(1)

    const contextValues: TaskListContextType  = {
        tasks,
        setTasks,
        nextID,
        setNextID
    }

    
    return (
        <TasksContext.Provider value={contextValues}>
            {props.children}
        </TasksContext.Provider>
    )
}

type PrincipalStackParamList = {
    ToDoList: undefined,
    Task: {id : number},
}

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const TaskStack = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{contentStyle:{backgroundColor:'white'}}}
        >
            <Stack.Screen 
                name="ToDoList" 
                component={ToDoListScreen} 
                options={{ title: 'Tasks',  headerTitleAlign: 'center', 
                    headerStyle: {
                        backgroundColor: '#e3c181', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,                
                    }
                }}
            />
            
            <Stack.Screen 
                name="Task" 
                component={TaskScreen} 
                options={({ route }) => ({
                    title: `Editing task ${route.params.id}`,  headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#e3c181', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,                
                    }
                })} 
            />
        </Stack.Navigator>
    )
}

type PrincipalStackParamList = {
    ToDoList: undefined,
    Task: {id : number},
}

type Task = {
    id: number,
    content: string,
    completed: boolean,
}

type PropsTask = NativeStackScreenProps<PrincipalStackParamList, 'Task'>;


const TaskScreen = (props: PropsTask) => {
    const [taskData, setTaskData] = useState<Task>({} as Task);
    const context = useContext(TasksContext);

    useEffect(() => {
        getSelectedTask(props.route.params.id);
    }, [props.route.params.id]);

    function getSelectedTask(id:number){
        const task = context.tasks.find(task => task.id === id); 

        if (task) {
            setTaskData(task); 
        }
    }

    function updateTask(value: string|boolean, field: keyof Task){
        setTaskData(
            {
                ...taskData,
                [field]: value
            }
        );
    }

    function handleOnPress(){
        if (!taskData.content || taskData.content.trim() === '') {
            const task = context.tasks.find(task => task.id === props.route.params.id);

            if(task){
                let auxList = context.tasks;
                auxList = auxList.filter(item => item.id!== task.id);
                context.setTasks([...auxList]);
            }

            props.navigation.goBack();
            return;
        }

        let found = false;
        let arrPos = 0;
        let auxTaskList = [...context.tasks];
 
        while (!found && arrPos <= auxTaskList.length-1){
            if(auxTaskList[arrPos].id === taskData.id){
                auxTaskList[arrPos] = taskData;
                found = true;
                break;
            }
            arrPos++;
        }

        if(!found){
            auxTaskList.push(taskData);
        }

        context.setTasks([...auxTaskList]);
        props.navigation.goBack();
    }


    return (
        <View style={{flex:1}}>
            <View style={styles.active}>
                <Text style={styles.activeText}>Completed:</Text>
                    <Switch
                        onValueChange={()=> updateTask(!taskData.completed, 'completed')}
                        value={taskData.completed}
                    />
            </View>

            <View>
                <TextInput placeholder='Task content here' 
                value={taskData.content}
                onChangeText={(e) => updateTask(e, 'content')}/>
            </View>
            
            <TouchableOpacity onPress={handleOnPress} style={styles.container}>
                <Text style={styles.btntext}>Finish editing</Text>
            </TouchableOpacity>
        </View>
    )
}

type PrincipalStackParamList = {
    ToDoList: undefined,
    Task: {id : number},
}

type Task = {
    id: number,
    content: string,
    completed: boolean,
}

type PropsToDoList = NativeStackScreenProps<PrincipalStackParamList, 'ToDoList'>;


const ToDoListScreen = (props: PropsToDoList) => {

    const context = useContext(TasksContext);

    function createTask (){
        const newTask = {
            id: context.nextID,
            content: '',
            completed: false,
        };
    
        context.setTasks([...context.tasks, newTask]);
        context.setNextID(context.nextID + 1); 
    
        props.navigation.navigate('Task', { id: newTask.id });
    }
    
    function changeStatus(taskId : number){
        let updatedList = context.tasks;

        for (let i = 0; i < updatedList.length; i++){
            if (updatedList[i].id === taskId){
                updatedList[i].completed =!updatedList[i].completed;
                break;
            }
        }

        context.setTasks([...updatedList]);
    }

    function deleteTask(taskId : number){
        let updatedList = [];

        for (let i = 0; i < context.tasks.length; i++){
            if (context.tasks[i].id !== taskId){
                updatedList.push(context.tasks[i]);
            }
        }

        context.setTasks(updatedList);
    }

    return (
        <View style={{flex:1}}>            
            <View>
                <FlatList
                    data={context.tasks}
                    renderItem={(task) => {
                    return (
                        <View key={task.index} style={styles.task}>

                            <TouchableOpacity onPress={() => changeStatus(task.item.id)} style={styles.taskLeftIcon}>
                                <Icon name={!task.item.completed ? `square-outline` : `checkbox-outline`} size={25} color={'#e3c181'}></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => props.navigation.navigate('Task', {id: task.item.id})} style={styles.taskContent}>
                                <Text style={task.item.completed ? styles.taskTextCompleted : styles.taskText}>{task.item.content}</Text>
                            </TouchableOpacity>
                            
                            <View style={styles.taskActions}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Task', {id: task.item.id})} style={styles.taskActionIcon}>
                                    <Icon name='pencil' size={25} color={'grey'}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => deleteTask(task.item.id)} style={styles.taskActionIcon}>
                                    <Icon name='trash' size={25} color={'grey'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        )
                        }}
                    keyExtractor={(task, index) => task.content + index}
                />
            </View>
            {
                /**<View>
                    <Text>{JSON.stringify(context.tasks)}</Text>
                </View>*/
            }
            <View style={styles.container}>
                <TouchableOpacity onPress={() => createTask()}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

```

***
</br>


### Práctica 24

> 📂
> Crear una navegación Drawer. La primera Drawer.screen será:
StackNavigation.tsx (así se cargará por defecto el Stack ) y la otra: AboutScreen.tsx.
Poner en AboutScreen.tsx información tuya ( tú nombre, curso, etc ) En
StackNavigation.tsx tendremos un Stack Navigator que apunte al menos a dos pantallas,
una será una pantalla de enlaces a otras actividades del Stack, La segunda pantalla será la
tarea de la calculadora ( que deberá estar enlazada en la página de enlaces ) Así desde el
Drawer podemos acceer directamente a About y luego si desde el Drawer se elige el
Stack podemos acceder a las otras pantallas del Stack.
Pon en la carpeta navigation tanto MenuLateral.tsx como StackNavigation.tsx

- Código:

```tsx

const Drawer = createDrawerNavigator();

const SideMenu24 = (props: Props) => {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#008080' },
            headerTintColor: 'white',
            drawerActiveTintColor: '#1E90FF',
        }}
        >
            <Drawer.Screen 
                name="StackNavigation" 
                component={StackNavigation24} 
                options={{ title: 'StackNav' }} 
            />
            <Drawer.Screen 
                name="AboutScreen" 
                component={AboutScreen} 
                options={{ title: 'About me' }} 
            />
        </Drawer.Navigator>
    )
}

export type PrincipalStackParamList = {
    LinksScreen: undefined;
    CalcScreen: undefined;
    ToDoScreen : undefined;
};
    
const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const StackNavigation24 = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#008080' },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
            }}
            >
            <Stack.Screen 
                name="LinksScreen" 
                component={LinksScreen24} 
                options={{ title: 'Links' }} 
            />
            <Stack.Screen 
                name="CalcScreen" 
                component={Practice10Screen} 
                options={{ title: 'Calc' }} 
            />
            
            <Stack.Screen 
                name="ToDoScreen" 
                component={Practice23Screen} 
                options={{ title: 'To Do List' }} 
            />
        </Stack.Navigator>
    )
}

const AboutScreen = (props: Props) => {
    return (
            <View style={styles.container}>
                <Text style={styles.title}>About me</Text>
                <Text style={styles.text}>Name: Nabil León Álvarez</Text>
                <Text style={styles.text}>Class: 2DAM</Text>
            </View>
    )
}


type Props = NativeStackScreenProps<PrincipalStackParamList, 'LinksScreen'>;
const LinksScreen24 = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Link to other activities</Text>
            <Button 
                title="Calc" 
                onPress={() => props.navigation.navigate('CalcScreen')} 
            />
            <Button 
                title="To Do List" 
                onPress={() => props.navigation.navigate('ToDoScreen')} 
            />
            
        </View>
    )
}
```


***
</br>


### Práctica 25

> 📂
> Reproducir el ejemplo anterior. Girar la pantalla.
Cambiar el color de fondo del menú lateral y poner que tenga un ancho de 200. Prueba a
comentar y descomentar la línea del drawerContent. Vamos a personalizar el menú.

- Código:

```tsx

const Drawer = createDrawerNavigator();


const Practice25SideMenu = (props :Props) => {
    const dimensions  = Dimensions.get("window");

    function customDrawer(props: DrawerContentComponentProps){
        return  (
            <DrawerContentScrollView {...props}>
                <View>
                    <Text>Pets</Text>
                </View>
                <DrawerItem label={"Home"} 
                    onPress={
                        () => props.navigation.navigate('Home')
                    }
                />
                <DrawerItem label={"Hello World!"} 
                    onPress={
                        () => props.navigation.navigate('HelloWorld')
                    }
                />
                <DrawerItem label={"Second Screen"} 
                    onPress={
                        () => props.navigation.navigate('SecondScreen')
                    }
                />
            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator 
            
            screenOptions={{
                drawerStyle:{
                    backgroundColor: "#008080",
                    width: 250,
                },
                drawerType: dimensions.width >= 768 ? "permanent" : "front",
            }}

            drawerContent={(props) => customDrawer(props)}>
            <Drawer.Screen name="HelloWorld" options={{title: 'Hello World!'}} component={HelloWorldScreen} />
            <Drawer.Screen name="SecondScreen"  options={{title: 'Second Screen'}} component={SecondScreen25} />
            <Drawer.Screen name="Home"  options={{title: 'Home'}} component={StackNavigation25} />
        </Drawer.Navigator>
    )
}

export type PrincipalStackParamList = {
    HomeScreen25: undefined;
};
    
const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const StackNavigation25 = (props: Props) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#008080' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
        }}
        >
        <Stack.Screen 
            name="HomeScreen25" 
            component={HomeScreen25} 
            options={{ title: 'Home' }} 
        />

        </Stack.Navigator>
    )
}
```


***
</br>


### Práctica 26

> 📂
> Realizar la app de mascotas descrita

- Código:

```tsx
type Props = {
    children: React.ReactNode;
}

type PetListContextType ={
    cats: Pet[],
    dogs: Pet[],
    setCats: (cats: Pet[]) => void,
    setDogs: (dogs: Pet[]) => void,
}

type Pet = {
    breed: string,
    img: string,
    description: string,
}


export const PetsContext = createContext<PetListContextType >({} as PetListContextType );

const Practice26Context = (props: Props) => {
    const defaultCats: Pet[] = [
        {
        breed: 'Persian',
        img: 'https://www.thesprucepets.com/thmb/qP6SYSoepyKZaDzJKcRDPB1yDV4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/50122757_393198351489429_2336461074070557448_n-5c4cf69f46e0fb00014a2b9f.jpg',
        description: 'description',
        },
        {
        breed: 'Siamese',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thesprucepets.com%2Fthmb%2F_nHqoWVVwDSkPlqKI9gbDay5jI0%3D%2F4608x3072%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fclose-up-portrait-of-cat-901825714-5c8bf4a9c9e77c00010e967d.jpg&f=1&nofb=1&ipt=48469c26499d981a3a3386736c026fbe223e7526d677f817a482015fe000a63d&ipo=images',
        description: 'description.',
        },
    ];
    
    const defaultDogs: Pet[] = [
        {
        breed: 'Cocker Spaniel',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bNi4LCFptV9eTLTSon8O5AHaFt%26pid%3DApi&f=1&ipt=3be1716aeb3370eaeac6166f37c1c27c990851b77d5785935888ae2a2182570e&ipo=images',
        description: 'description',
        },
        {
        breed: 'Labrador Retriever',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thesprucepets.com%2Fthmb%2FET8IKk28ByTK3zgXiKMxu1OlKH0%3D%2F4984x3323%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F1_BlackPuppy-5ba50070c9e77c0082221c54.jpg&f=1&nofb=1&ipt=5456579b76b4fbfbfa619da87faf69f91376dc4bd43e724f74ffb41d5103d509&ipo=images',
        description: 'description',
        },
    ];
    
    const [cats, setCats] = useState<Pet[]>(defaultCats);
    const [dogs, setDogs] = useState<Pet[]>(defaultDogs);


    const contextValues: PetListContextType  = {
        cats: cats,
        dogs: dogs,
        setCats: setCats,
        setDogs: setDogs
    }

    
    return (
        <PetsContext.Provider value={contextValues}>
            {props.children}
        </PetsContext.Provider>
    )
}

export type PrincipalStackParamList = {
  PetScreen: undefined;
  Breed: {name : string},
};

const Stack = createNativeStackNavigator<PrincipalStackParamList>();

const StackNav26 = (props: Props) => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: { backgroundColor: '#008080' },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
    }}
    >
    <Stack.Screen 
        name="PetScreen" 
        component={PetScreen} 
        options={{ title: 'Home' }} 
        
    />

    </Stack.Navigator>
  )
}

type PrincipalStackParamList = {
    SelectBreed: { category: string }; 
    Pet: { category: string, breed: string };
};

type PropsSelectBreedScreen = NativeStackScreenProps<PrincipalStackParamList, 'SelectBreed'>;

const BreedScreen = (props: PropsSelectBreedScreen) => {
    const context = useContext(PetsContext);
    const { category } = props.route.params;

    const pets = category === 'dogs' ? context.dogs : context.cats;
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Select breed {category === 'cats' ? 'gatos' : 'perros'}</Text>

            {pets.map((pet, index) => (
                <TouchableOpacity key={index}
                    onPress={() => props.navigation.navigate('Pet', { category, breed: pet.breed })}
                    style={styles.breedItem}>
                <Text>{pet.breed}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

type PrincipalStackParamList = {
    Cats: { category: string }; 
    Dogs: { category: string };
};

type PetScreenProps = DrawerScreenProps<PrincipalStackParamList, 'Cats' | 'Dogs'>;

const PetScreen = (props: PetScreenProps) => {
    const context = useContext(PetsContext);
    const { category } = props.route.params;

    const pets = category === 'dogs' ? context.dogs : context.cats;
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {category === 'dogs' ? 'Dogs' : 'Cats'}</Text>
                <FlatList
                    data={pets}
                    renderItem={({ item }) => (
                        <View style={styles.petCard}>
                            <Image source={{ uri: item.img }} style={styles.petImage} />
                            <Text style={styles.petText}>{item.breed}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.breed}
                />

        </View>
    ) 
}
```

***
</br>


### Práctica 27

> 📂
> Crear una app con dos tabs. En una de ellas aparecerá un icono relacionado
con operaciones matemáticas y al acceder cargará un StackNavigation que en su primera
pantalla tendrá enlaces a tareas realizadas ( una de ellas será la calculadora
La otra tab tendrá el About.tsx que mostrará tu nombre, curso, aficione

- Código:

```tsx
export type PrincipalStackParamList = {
    CalcScreen: undefined;
};
    
const Stack = createNativeStackNavigator<PrincipalStackParamList>();


const StackNav27 = (props: Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CalcScreen" component={Practice10Screen} />
        </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

const TabNav27 = (props: Props) => {
    return (
            <Tab.Navigator 
                screenOptions={{headerShown:false}}>

                <Tab.Screen name='Operations' component={StackNav27}
                    options={ {tabBarIcon: ({focused}) => 
                        <Icon name={(focused) ? 'calculator' : 'calculator-outline'} size={30}/>
                    }
                }
                
                />
                <Tab.Screen name='About' component={About27}
                    options={ {tabBarIcon: ({focused}) => 
                            <Icon name={(focused) ? 'person' : 'person-outline'} size={30}/>
                        }
                    }
                />

            </Tab.Navigator>
    )
}

const About27 = (props: Props) => {
  return (
        <View style={styles.container}>
                      <Text style={styles.title}>About me</Text>
                      <Text style={styles.text}>Name: Nabil León Álvarez</Text>
                      <Text style={styles.text}>Class: 2DAM</Text>
      </View>
  )
}
```

***
</br>


### Práctica 28

> 📂
> Aplicación Pokemon.
Haremos una aplicación para ver datos de pokemon. Habrá
dos tabs y en cada tab tendremos un StackNavigation. La
primera tab tiene un Stack que será para visualizar la lista de
pokemon ( usaremos un flatlist ) en la primera pantalla del Stack
y cuando se pulse sobre un pokemon se abrirá otra Screen del
Stack para ver todos los datos del pokemon ( con sus diferentes
sprites )
La segunda tab tiene otro Stack. En la primera de las pantallas
del Stack hay un cuadro de texto para buscar pokemon por
subnombre ( aparecerán los pokemon que en su nombre incluyan
el texto introducido ). Cuando pulsamos sobre alguno de la lista
obtenida nos lleva a la Screen con todos los datos del pokemon.

- Código:

```tsx
const Tab = createBottomTabNavigator();


const TabNav28 = (props: Props) => {

    const { width, height} = useWindowDimensions();
    const isHorizontal = width > height;
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarPosition: isHorizontal ? 'left' : 'bottom',
                tabBarVariant: isHorizontal ? 'material' : 'uikit',
                tabBarLabelPosition: 'below-icon'
            }}>   
                
            <Tab.Screen name='Pokedex' component={StackNavTabPokedex}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'list' : 'list-outline'} size={30}/>
                }
            }/>
            
            <Tab.Screen name='Search' component={StackNavTabSearch}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'search' : 'search-outline'} size={30}/>
                }
            }/>
                
        </Tab.Navigator>
    )
}

type PokedexStackParamList = {
    Pokedex: undefined,
    Pokemon: {name : string, url: string, id : number},
}

const Stack = createNativeStackNavigator<PokedexStackParamList>();

const StackNavTabPokedex = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{contentStyle:{backgroundColor:'white'}}}
        >
            <Stack.Screen 
                name="Pokedex" 
                component={Pokedex} 
                options={{ title: 'Pokedex',  headerTitleAlign: 'center', 
                    headerStyle: {
                        backgroundColor: '#008080', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,                
                    }
                }}
            />
            
            <Stack.Screen 
                name="Pokemon" 
                component={Pokemon} 
                options={({ route }) => ({
                    title: `${route.params.name.toUpperCase()}`,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#008080', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,      
                    }
                })} 
            />
        </Stack.Navigator>
    )
}


type SearchPokedexStackParamList = {
    SearchPokedex: undefined,
    Pokemon: {name : string},
}

const Stack = createNativeStackNavigator<SearchPokedexStackParamList>();

const StackNavTabSearch = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{contentStyle:{backgroundColor:'white'}}}
        >
            <Stack.Screen 
                name="SearchPokedex" 
                component={SearchPokemon} 
                options={{ title: 'Search in Pokedex',  headerTitleAlign: 'center', 
                    headerStyle: {
                        backgroundColor: '#008080', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,                
                    }
                }}
            />
            
            <Stack.Screen 
                name="Pokemon" 
                component={Pokemon} 
                options={({ route }) => ({
                    title: `${route.params.name.toUpperCase()}`,  headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#008080', 
                    },
                    headerTintColor: 'white', 
                    headerTitleStyle: {
                        fontWeight: 'bold',    
                        fontSize: 20,                
                    }
                })} 
            />
        </Stack.Navigator>
    )
}

type PokedexType = {
    results: PokemonType[];
}

type PokemonType = {
    name: string;
    url: string;
    id: number;
}

type PokedexStackParamList = {
    Pokedex: undefined,
    Pokemon: {name : string, url : string, id : number},
}

type PropsPokedex = NativeStackScreenProps<PokedexStackParamList, 'Pokedex'>;



const Pokedex = (props: PropsPokedex) => {
    /**
     * UseStates
     */
    const [pokedex, setPokedex] = useState<PokemonType[]>([]);

    /**
     * Other properties
     */
    const uri: string = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=99"

    useEffect(() => {
        fetchPokemon(uri)
    }, []);

    /**
     * Async function to fetch list of pokemon from the api
     * @param url of the api
     */
    async function fetchPokemon(url: string) {
        const response = await axios.get(url);
        let list = response.data as PokedexType

        const aux = list.results.map((pokemon) => ({
            ...pokemon,
            id: Number(pokemon.url.split('/').at(-2)), 
        }));

        setPokedex(aux);
    }


    return (
            <FlatList
                data={pokedex}
                renderItem={(pokemon) => {
                    return (
                            <TouchableOpacity onPress={() => props.navigation.navigate
                                    ('Pokemon',
                                        {   name: pokemon.item.name, 
                                            url: pokemon.item.url, id: pokemon.item.id 
                                        }
                                    )
                                }
                                style={styles.item}
                                >
                                <View>
                                    <Text style={styles.text}>{pokemon.item.name}</Text>
                                </View>
                                <View>
                                    <Image
                                        source={
                                            { 
                                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.item.id}.png` 
                                            }
                                        }
                                        style={styles.sprite}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                        }}
                keyExtractor={(pokemon, index) => pokemon.name + index}
                style={styles.container}
            />
    )
}

type PokedexStackParamList = {
    Pokedex: undefined,
    Pokemon: {name : string, url : string, id : number},
}

type PropsPokedex = NativeStackScreenProps<PokedexStackParamList, 'Pokemon'>;

const Pokemon = (props: PropsPokedex) => {
  /**
   * UseStates
   */
  const [data, setData] = useState<PokemonDetails>({} as PokemonDetails);
  const [sprites, setSprites] = useState<String[]>();
  
  /**
   * Other properties
   */
  const pokemon = props.route.params;

  useEffect(() => {
    fetchData();
  }, [pokemon.id]);


  useEffect(() => {
    getSprites();
  }, [data]);


  /**
   * Function to fetch the pokemon data from the api
   */
  const fetchData = async () => {
    const response = await axios.get(pokemon.url);
    let dataPkmn = response.data as PokemonDetails;
    setData(dataPkmn);
  }


  /**
   * Function to get the sprites of the pokemon
   */
  const getSprites = async () => {
    const auxSprites: string[] = [];

    const typeOfSprites : string []= [
      'front_default',
      'front_shiny',
      'back_default',
      'back_shiny',
      'front_female',
      'front_shiny_female',
      'back_female',
      'back_shiny_female',
    ]
  
    for (const typeSprite of typeOfSprites) {
      const spriteExists = data.sprites?.[typeSprite as keyof typeof data.sprites];
      if (spriteExists && typeof spriteExists=== 'string') {
        auxSprites.push(spriteExists);
      }
    }

    setSprites(auxSprites);  
  }
  
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.secondContainer}>
        <View>
          <Image
            source={
              { 
                uri: data.sprites?.other?.['official-artwork']?.front_default
                ? data.sprites.other['official-artwork'].front_default
                : data.sprites?.other?.home?.front_default,
              }
            }
            style={styles.mainImg} 
          />
        </View>
        <View>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        
        <Text style={styles.typeText}>
            {data.weight/10} KG 
            <Icon name='arrow-forward-outline'/>
            {data.height/10} M
        </Text>

        <FlatList
            data={data.types}
            renderItem={({ item }) => (
                <Text style={styles.typeText}>{item.type.name} </Text>
            )}
            
            keyExtractor={(item, index) => item.type.name + index}
            horizontal
            ItemSeparatorComponent={() => 
              <Icon name='remove' style={styles.separator} size={10}/>} 
            style={styles.typeContainer}
          />
        
        <FlatList
            data={data.abilities}
            renderItem={({ item }) => (
                <Text style={styles.typeText}>{item.ability.name} </Text>
            )}
            keyExtractor={(item, index) => item.ability.name + index}
            horizontal
            style={styles.typeContainer}
            ItemSeparatorComponent={() => 
              <Icon name='ellipse' style={styles.separator} size={10}/>} 
          />
        
        <FlatList
          data={data?.stats}
          renderItem={({ item }) => (
            <View style={styles.statRow}>
              <Text style={styles.statName}>{item.stat.name}: </Text>
              <Text style={styles.statValue}> {item.base_stat}</Text>
            </View>
          )}
          keyExtractor={(item) => item.stat.name}
        />
        
        <Text style={styles.title}>Sprites of {pokemon.name}</Text>
          <FlatList
            data={sprites} 
            renderItem={({ item }) => (
              <View style={styles.spriteContainer}>
                <Image source={{ uri: item.trim() }} style={styles.spriteImage} />
              </View>
            )}
            keyExtractor={(item, index) => item+index.toString()}
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            style={styles.spriteRow}
          />       
      </View>
    </ScrollView>
  )
}


type PokedexType = {
  results: PokemonType[];
}

type PokemonType = {
  name: string;
  url: string;
  id: number;
}

type SearchPokedexStackParamList = {
  SearchPokedex: undefined,
  Pokemon: {name : string, url: string, id : number},
}

type PropsSearchPokedex = NativeStackScreenProps<SearchPokedexStackParamList, 'SearchPokedex'>;

const SearchPokemon = (props: PropsSearchPokedex) => {
  const [pokemonMatching, setPokemonMatching] = useState<PokemonType[]>([]);
  
  const uri: string = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=99"

  useEffect(() => {

  }, [pokemonMatching]);

  
    /**
     * Async function to fetch list of pokemon from the api
     * @param url of the api
     */
  const searchForPokemon = async (search: string) => {
    const response = await axios.get(uri);
    let list = response.data as PokedexType

    const aux = list.results.map((pokemon) => ({
      ...pokemon,
      id: Number(pokemon.url.split('/').at(-2)), 
    }));

    setPokemonMatching(
      aux.filter(
        (pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );

  }


  return (
    <View style={styles.container}>
      <TextInput placeholder='Search for a pokemon' onChangeText={searchForPokemon} style={styles.textInput}></TextInput>
      <FlatList
          data={pokemonMatching}
          renderItem={(pokemon) => {
              return (
                  <View key={pokemon.index} style={styles.item}>
                      <TouchableOpacity onPress={() => props.navigation.navigate
                              ('Pokemon',
                                  {   name: pokemon.item.name, 
                                      url: pokemon.item.url, id: pokemon.item.id 
                                  }
                              )
                          }
                          >
                          <View>
                              <Text style={styles.text}>{pokemon.item.name}</Text>
                          </View>
                          <View>
                              <Image
                                  source={
                                      { 
                                          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.item.id}.png` 
                                      }
                                  }
                                  style={styles.sprite}
                              />
                          </View>
                      </TouchableOpacity>
                  </View>
                  )
                  }}
          keyExtractor={(pokemon, index) => pokemon.name + index}
          style={styles.container}
        />
    </View>
  )
}
```



- Captura:
<div align="center">
<img src="./img/p28-01.png"/>
<img src="./img/p28-02.png"/>
<img src="./img/p28-03.png"/>
</div>

***
</br>


### Práctica 29

> 📂
> Reproducir el ejemplo anterior. Pero en lugar de console.log aparecerá la
localización en un <Text> mediante json.stringify(). En el caso de que no se tenga
permisos se mostrará que no los hay. Probar a conceder o no el permiso, luego
eliminarlo, etc

- Código:

```tsx
const Practice29Screen = (props: Props) => {
const [message, setMessage] = useState<string>("");

    async function showPosition(){
        let ps: PermissionStatus;
        ps = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (ps != 'granted') {
            ps = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        if (ps == 'granted'){
            Geolocation.getCurrentPosition(info=> setMessage(JSON.stringify(info)));
        } else {
            setMessage("No se han obtenido los permisos");
        }
    }


    return (
        <View>
        <Text>TravelScreen</Text>
        <Button title="Permisos gps" onPress={showPosition}/>
            <Text>{message}</Text>
        </View>
    )
}
```

***
</br>

### Práctica 30

> 📂
> Vamos a crear un historial de ubicaciones, en la actividad de permisos de
geolocalización. Vamos a modificarla de tal forma que el botón lo que haga es guardar en
asyncstorage la latitud, longitud y timestamp ( se debe mantener que si no hay permisos
se soliciten ) Al pulsar en el botón se informará en un <Text> de que se ha guardado y la
posición que ha guardado. Habrá otro botón que se llamará “historial” que al pulsarlo lee
del asyncstorage la lista de posiciones guardadas y las muestra en un <Text>

- Código:

```tsx

type Location = {
  latitude: number,
  longitude: number,
  timestamp: string,
}
const Practice30Screen = (props: Props) => {
  const [location, setLocation] = useState<Location>({} as Location);
  const [history, setHistory] = useState<Location[]>([]);
  

    /**
     * Async function to request the location permissions
     */
    const requestLocationPermission = async () => {
      let ps: PermissionStatus;
      ps = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  
      if (ps === 'granted') {
          return true;
      } else{
        ps = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        return ps === 'granted';
      }
    };
  

    /**
     * Async function to save the current location to AsyncStorage
     */
    const saveLocation = async () => {
      const permission = await requestLocationPermission();
  
      if (!permission) {
        return;
      }

      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const timestamp = new Date().toDateString();
          const newLocation = { latitude, longitude, timestamp };

          try {

            const storedHistory = await AsyncStorage.getItem('location-history');
            const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];
            const updatedHistory = [...parsedHistory, newLocation];

            await AsyncStorage.setItem('location-history', JSON.stringify(updatedHistory));
            setLocation(newLocation);

          } catch (error) {
            console.error('Error saving location', error);
          }
        },
      );
    }

    /**
     * Async function to retrieve history of locations
     */
    const showHistory = async () => {
      const storedHistory = await AsyncStorage.getItem('location-history');
      const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];
      setHistory(parsedHistory);
    };
  
    return (
      <GestureHandlerRootView>
        <View style={{ flex: 1, padding: 20 }}>
          <Button title="Save location" onPress={saveLocation} />
          {location && (
            <Text>{`Location: Lat ${location.latitude}, Long ${location.longitude}, Timestamp: ${location.timestamp}`}</Text>
          )}
          <Button title="Show history" onPress={showHistory} />
          <ScrollView>
            {history.map((item, index) => (
              <Text key={index}>
                {`Lat: ${item.latitude}, Long: ${item.longitude}, Timestamp: ${item.timestamp}`}
              </Text>
            ))}
          </ScrollView>
      </View>
    </GestureHandlerRootView>
  )
}
```





***
</br>

### Práctica 31

> 📂
> Hacer la actividad descrita. Cuando arranque la aplicación y se muestre la
primera pantalla poner modo avión cerrar la aplicación y volver abrir. Hacer click en
alguna de las noticias. Si todo está bien cargará la noticia del async storage y la mostrará

- Código:

```tsx

type Props = {
    children: React.ReactNode;
}

type ArticlesListContextType ={
    articles: Article[],
    setArticles: (articles: Article[]) => void,
    visited: string[],
    setVisited: (visited: string[]) => void,
    currentArticle: Article,
    setCurrentArticle: (article: Article) => void,
    saveArticlesAsyncStorage: (articles:Article[]) => Promise<void>,
    saveVisitedPagesAsyncStorage: (visited:string[]) => Promise<void>,
}

type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}

export const ArticlesContext = createContext<ArticlesListContextType>({} as ArticlesListContextType );

const ArticleContext = (props: Props) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [visited, setVisited] = useState<string[]>([]);
    const [currentArticle, setCurrentArticle] = useState<Article>({} as Article);


    /**
     * Function to save the asyncStorage
     */
    const saveArticlesAsyncStorage = async (articles: Article[]) => {
        try {
            await AsyncStorage.setItem('articles', JSON.stringify(articles));
        } catch (error) {
            console.log('Error saving data', error);
        }
    }

    /**
     * Function to save the asyncStorage
     */
        const saveVisitedPagesAsyncStorage = async (visited : string[]) => {
            try {
                await AsyncStorage.setItem('visited', JSON.stringify(visited));
            } catch (error) {
                console.log('Error saving data', error);
            }
        }
    
    

    const contextValues: ArticlesListContextType  = {
        articles,
        setArticles,
        visited,
        setVisited,
        currentArticle,
        setCurrentArticle,
        saveArticlesAsyncStorage,
        saveVisitedPagesAsyncStorage
    }

    
    return (
        <ArticlesContext.Provider value={contextValues}>
            {props.children}
        </ArticlesContext.Provider>
    )
}

type FeedStackParamList = {
    FeedScreen: undefined,
    ArticleDetail: undefined,
}

type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}

const Stack = createNativeStackNavigator<FeedStackParamList>();

const Practice31StackNav = (props: Props) => {
    return (
        <Stack.Navigator
        screenOptions={{contentStyle:{backgroundColor:'white'}}}
        >
        <Stack.Screen 
            name="FeedScreen" 
            component={FeedScreen} 
            options={{ title: 'FeedScreen',  headerTitleAlign: 'center', 
                headerStyle: {
                    backgroundColor: '#008080', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontWeight: 'bold',    
                    fontSize: 20,                
                }
            }}
        />
        
        <Stack.Screen 
            name="ArticleDetail"  
            component={ArticleDetail} 
            options={{ title: 'FeedScreen',  headerTitleAlign: 'center', 
                headerStyle: {
                    backgroundColor: '#008080', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                    fontWeight: 'bold',    
                    fontSize: 20,                
                }
            }}
        />
    </Stack.Navigator>
    )
}


type FeedStackParamList = {
    FeedScreen: undefined,
    ArticleDetail: undefined,
}
type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}

type PropsArticle = NativeStackScreenProps<FeedStackParamList, 'ArticleDetail'>;
const ArticleDetail = (props: PropsArticle) => {

    const [content, setContent] = useState<string | null>(null);

    const context = useContext(ArticlesContext);
    
    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        try {
            const cachedContent = await getCache(context.currentArticle.link);
            if (cachedContent) {
                setContent(cachedContent);
                return;
            }
            
        } catch (error) {
            console.error('Error loading content:', error);
        }
    };

    async function getCache(uri:string){
        try{
            const response = await axios.get(uri);
            const data = response.data;
            AsyncStorage.setItem(uri, JSON.stringify(data))
            return data;
        }catch( error){
            const localData = await AsyncStorage.getItem(uri);
            if(localData){
                return localData;
            }

            return null;
        }
    }

    if (content) {
        return <WebView source={{html: content}} style={styles.article}/>;
    }
    
};

type Article = {
    title: string;
    link: string;
    id: string;
    description: string;
}


type FeedStackParamList = {
    FeedScreen: undefined,
    ArticleDetail: undefined,
}

type PropsFeed = NativeStackScreenProps<FeedStackParamList, 'FeedScreen'>;

const FeedScreen = (props: PropsFeed) => {

    /**
     * Other properties
     */
    const url = 'https://www.xataka.com/feedburner.xml';
    const context = useContext(ArticlesContext);


    /**
     * UseEffect
     */
    useEffect(() => {
        const check = checkAsyncStorage();
        if(!check){
            fetchFeed();
        }
    }, []);


    /**
     * Function to check the asyncStorage
     */

    const checkAsyncStorage = async () =>{
        const articles = await AsyncStorage.getItem('articles');
        const visited  = await AsyncStorage.getItem('visited');

        if(articles  && visited){
            context.setArticles(JSON.parse(articles));
            context.setVisited(JSON.parse(visited));
            return true;
        } else if(articles && !visited){
            context.setArticles(JSON.parse(articles));
            return true;
        } else {
            return false;
        }
    }

    /**
     * Function to fetch the articles from the feed
     */
    const fetchFeed = async () => {
        try {
            const response = await axios.get(url);
            const parsed = await rssParser.parse(response.data);

            const articlesData: Article[] = parsed.items.map((item): Article => ({
                title: item.title || 'Untitled',
                link: item.links?.[0]?.url || '#', 
                id: item.id || 'Aa0',
                description: item.description || 'No description available',
            }));

            context.setArticles([...articlesData]);
            context.saveArticlesAsyncStorage(articlesData);
            
        } catch (error) {
            console.error('Error fetching articles:', error);

            const storageCache = await AsyncStorage.getItem('articles');
            const storageCacheVisted = await AsyncStorage.getItem('vistedArticles');

            if (storageCache) {
                context.setArticles(JSON.parse(storageCache));
            } 

            if (storageCacheVisted) {
                context.setVisited(JSON.parse(storageCacheVisted));
            }
        } 
    };

    /***
     * Function to handle the on press on an article
     */
    const handlePress = async (article : Article) => {
        const aux = [...context.visited, article.id];
        context.setVisited(aux);
        context.saveVisitedPagesAsyncStorage(aux);
        context.setCurrentArticle({...article});
        props.navigation.navigate('ArticleDetail');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={context.articles}
                keyExtractor={(item, index) => item.id+index}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handlePress(item)}
                        style={[
                            context.visited.includes(item.id) ? styles.visited : styles.articleContainer
                        ]}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
```

***
</br>


### Práctica 32

> 📂
> a) Reproducir el ejemplo anterior ( usar únicamente la clase Persona no
hace falta la otra clase )
b) Poner dos textinput. Uno para la edad y otro para el nombre. Ahora al pulsar en el
botón, en lugar de datos aleatorios, se creará en la base de datos la persona introducida
por el usuario

- Código:

```tsx
const Practice32Screen = (props: Props) => {

    useEffect(() => {
        async function initDB() {
            await dataSource.initialize();
        }
        initDB();
    }, []);

    const [personas, setPersonas] = useState<Persona[]>([]);
    const [currentName, setCurrentName] = useState("");
    const [currentAge, setCurrentAge] = useState(0);

    async function save() {
        if (!currentName ||!currentAge){
            return;
        }

        const newPerson = {
            nombre: currentName,
            edad: currentAge
        }

        await PersonaRepository.save(newPerson);
        const newPersonas = await PersonaRepository.find();
        setPersonas([...newPersonas]);
    }

return (
    <View style={{flex: 1}}>
        <TextInput placeholder='name' onChangeText={(text) => setCurrentName(text)}/>
        <TextInput placeholder='age' onChangeText={(text) => setCurrentAge(parseInt(text))}/>
        <FlatList
            data={personas}
            renderItem={({item}) => (
                <Text style={styles.text}>{item.id}; {item.nombre}; {item.edad}</Text>
            )}
            keyExtractor={(item, index) => item.id + "" + index}
        />
        <Button title='Create person' onPress={save}/>
    </View>
    )
}
```

***
</br>



### Práctica 33

> 📂
> En la actividad del TodoList vamos a persistir en base de datos, y así una
vez cerremos la aplicación y la volvamos a abrir se mantendrá la información de las
tareas. Podemos utilizar el tipo boolean en TypeORM:
@Column('boolean') completada: boolean;
Para decir si se completó el todo. Observar que para evitar errores, cuando corresponda
el update y el delete de la tarea, mejor usar el id como condición

- Código:

```tsx
@Entity('task')
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn() id:number;
    @Column('text') content: string;
    @Column('boolean') completed: boolean;
}


type PrincipalStackParamList = {
    ToDoList: undefined,
    Task: {id : number},
}

type Task = {
    id: number,
    content: string,
    completed: boolean,
}

type PropsTask = NativeStackScreenProps<PrincipalStackParamList, 'Task'>;


const TaskScreen = (props: PropsTask) => {
    const [taskData, setTaskData] = useState<Task>({} as Task);
    const context = useContext(TasksContext33);

    useEffect(() => {
        async function getSelectedTask(id:number){
            const task = await TaskRepository.findOneBy({id: id});
            if (task) {
                setTaskData(task); 
            }
        }
        getSelectedTask(props.route.params.id);
    }, [props.route.params.id]);



    function updateTask(value: string|boolean, field: keyof Task){
        setTaskData(
            {
                ...taskData,
                [field]: value
            }
        );
    }

    async function handleOnPress(){
        if (!taskData.content || taskData.content.trim() === '') {
            await TaskRepository.delete({ id: taskData.id });
            const updatedTaskList = await TaskRepository.find();
            context.setTasks(updatedTaskList);
            props.navigation.goBack();
            return;
        }
        await TaskRepository.save({...taskData });
        const updatedTaskList = await TaskRepository.find();
        context.setTasks(updatedTaskList);

        props.navigation.goBack();
    }


    return (
        <View style={{flex:1}}>
            <View style={styles.active}>
                <Text style={styles.activeText}>Completed:</Text>
                    <Switch
                        onValueChange={()=> updateTask(!taskData.completed, 'completed')}
                        value={taskData.completed}
                    />
            </View>

            <View>
                <TextInput placeholder='Task content here' 
                value={taskData.content}
                onChangeText={(e) => updateTask(e, 'content')}/>
            </View>
            
            <TouchableOpacity onPress={handleOnPress} style={styles.container}>
                <Text style={styles.btntext}>Finish editing</Text>
            </TouchableOpacity>
        </View>
    )
}

type PrincipalStackParamList = {
    ToDoList: undefined,
    Task: {id : number},
}

type Task = {
    id: number,
    content: string,
    completed: boolean,
}

type PropsToDoList = NativeStackScreenProps<PrincipalStackParamList, 'ToDoList'>;


const ToDoListScreen = (props: PropsToDoList) => {

    const context = useContext(TasksContext33);

    useEffect(() => {
        async function initDB() {
            await dataSource.initialize();
        }
        initDB();
    }, []);

    async function createTask (){
        const newTask = {
            content: '',
            completed: false
        };

        await TaskRepository.save(newTask);
        const newTaskList = await TaskRepository.find();
        context.setTasks([...newTaskList]);
        const currentTask = newTaskList[newTaskList.length-1];
    
        props.navigation.navigate('Task', {id: currentTask.id});
    }

    
    
    async function changeStatus(taskId : number){
        const task = await TaskRepository.findOneBy({ id: taskId });

        if (task) {
            task.completed = !task.completed;
            await TaskRepository.save(task);
            const updatedTaskList = await TaskRepository.find();
            context.setTasks(updatedTaskList);
        }
    }

    async function deleteTask(taskId : number){
        await TaskRepository.delete({ id: taskId });
        const updatedTaskList = await TaskRepository.find();
        context.setTasks(updatedTaskList);
    }

    return (
        <View style={{flex:1}}>            
            <View>
                <FlatList
                    data={context.tasks}
                    renderItem={(task) => {
                    return (
                        <View key={task.index} style={styles.task}>

                            <TouchableOpacity onPress={() => changeStatus(task.item.id)} style={styles.taskLeftIcon}>
                                <Icon name={!task.item.completed ? `square-outline` : `checkbox-outline`} size={25} color={'#e3c181'}></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => props.navigation.navigate('Task', {id: task.item.id})} style={styles.taskContent}>
                                <Text style={task.item.completed ? styles.taskTextCompleted : styles.taskText}>{task.item.content}</Text>
                            </TouchableOpacity>
                            
                            <View style={styles.taskActions}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Task', {id: task.item.id})} style={styles.taskActionIcon}>
                                    <Icon name='pencil' size={25} color={'grey'}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => deleteTask(task.item.id)} style={styles.taskActionIcon}>
                                    <Icon name='trash' size={25} color={'grey'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        )
                        }}
                    keyExtractor={(task, index) => task.content + index}
                />
            </View>
            {
                /**<View>
                    <Text>{JSON.stringify(context.tasks)}</Text>
                </View>*/
            }
            <View style={styles.container}>
                <TouchableOpacity onPress={() => createTask()}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

```





***
</br>

### Práctica 34

> 📂
> Vamos a crear una actividad que emule una tienda de productos de comida.
Tendremos tabs y en una de las tabs introducimos los productos (nombre, precio, stock y
un boolean: descontinuado ) En la segunda tab hay un cuadro de texto para subnombre,
otro para precio menor que el número dado y otro para precio mayor qué el número dado
y un switch para elegir si ordenamos por nombre ascendente ( si el switch está a false no
ordena )

### Práctica 35

> 📂
> Continuamos con la tienda. Crearemos una entidad categoría y tendremos
un tab para introducir las categorías. Poner ya las relaciones Si hay problema con los
datos almacenados recreamos la base de datos desde cero ( basta cambiar el nombre de la
database y ejecutar: npx react-native start --reset-cache.
No nos preocuparemos ahora de como guardar el producto con la categoría vinculada


### Práctica 36

> 📂
> Continuamos con la tienda. Ahora en la tab para crear producto hay un
input para poner el nombre de la categoría y ya debe funcionar la relación bien


### Práctica 37

> 📂
> Hacer otra tab en la actividad de la tienda donde se muestren las categorías
en un FlatList y por cada categoría haremos un JSON.stringify() que permita ver los
productos que tiene cada categoría

- Código:

```ts
@Entity('category')
export class Category extends BaseEntity
{
    @PrimaryGeneratedColumn() id:number;
    @Column('text') name: string;

    @OneToMany(()=> Product, (pr) => pr.category)
    products: Product[];
}

@Entity('product')
export class Product extends BaseEntity{
    @PrimaryColumn('text') name: string;
    @Column('float') price: number;
    @Column('int') stock: number;
    @Column('boolean') discontinued: boolean;
    @ManyToOne(()=> Category, (cat) => cat.products)
    category: Category;

}
```

```tsx

type CategoryCreate = {
    name: string,
}

type Product = {
    name: string,
    price: number,
    stock: number,
    discontinued: boolean,
    category: Category,
}

type Category = {
    id: number,
    name: string,
    products: Product[],
}

const CategoryList37 = (props: Props) => {

    const [categories, setCategories] = useState<Category[]>({} as Category[]);
    const [name, setName] = useState<string>("");


    useEffect(() => {
        const getList = async () => {
            const categoryList = await CategoryRepository.find(
                {relations: ['products']}
            );
            setCategories([...categoryList]);
        }

        getList();

    }, [categories])


    async function save() {
            if (!name || name.trim() === "") {
                return;
            }
    
            const newProduct : CategoryCreate = {
                name: name,
            }
    
            await CategoryRepository.save(newProduct);
        }


    return (
        <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter category name"
                        onChangeText={(text) => setName(text)}
                    />
                </View>
            </View>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                    <Text style={styles.rowText}>{JSON.stringify(item.products.map(product => product.name))}</Text>
                </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Name</Text>
                        <Text style={styles.headerText}>Products</Text>
                    </View>
                }
                />
            <Button title='Add new category' color={'#008080'} onPress={save}/>
        </View>
    )
}


type Product = {
    name: string,
    price: number,
    stock: number,
    discontinued: boolean,
    category: Category,
}

type Category = {
    id: number,
    name: string,
}
const ProductList37 = (props: Props) => {

    const [products, setProducts] = useState<Product[]>({} as Product[]);
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0)
    const [stock, setStock] = useState<number>(0)
    const [discontinued, setDiscontinued] = useState<boolean>(false)
    const [category, setCategory] = useState<string>("")

    useEffect(() => {
        const getList = async () => {
            const productList = await ProductRepository.find(
                {
                    relations: ['category']
                }
            );
            setProducts([...productList]);
        }

        getList();

    }, [products])


    async function save() {
            if (!name || !price || !stock  || !category){
                return;
            }

            const checkIfCategoryExists = await CategoryRepository.findOneBy({name: category}); 
            let categoryAux;

            if (!checkIfCategoryExists){
                await CategoryRepository.save({name: category});
                categoryAux = await CategoryRepository.findOneBy({name: category}); 
            } else {
                categoryAux = checkIfCategoryExists; 
            }


            console.log(categoryAux);
            const newProduct : Product = {
                name: name,
                price: price,
                stock: stock,
                discontinued: discontinued,
                category: categoryAux,
            }
    
            await ProductRepository.save(newProduct);
        }


    return (
        <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter product name"
                        onChangeText={(text) => setName(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Price</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter product price"
                        keyboardType="numeric"
                        onChangeText={(text) => setPrice(parseFloat(text))}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Stock</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter product stock"
                        keyboardType="numeric"
                        onChangeText={(text) => setStock(parseInt(text))}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Category</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter product category"
                        onChangeText={(text) => setCategory(text)}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Discontinued</Text>
                    <Switch
                        value={discontinued}
                        onValueChange={(value) => setDiscontinued(value)}
                    />
                </View>
            </View>
            <FlatList
                data={products}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                    <Text style={styles.rowText}>{item.price}</Text>
                    <Text style={styles.rowText}>{item.stock}</Text>
                    <Text style={styles.rowText}>{item.discontinued ? 'Yes' : 'No'}</Text>
                    {
                        item.category ? 
                        <Text style={styles.rowText}>{item.category.name}</Text> :
                        <Text style={styles.rowText}>N/A</Text>
                    }
                </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Name</Text>
                        <Text style={styles.headerText}>Price</Text>
                        <Text style={styles.headerText}>Stock</Text>
                        <Text style={styles.headerText}>Discontinued</Text>
                        <Text style={styles.headerText}>Category</Text>
                    </View>
                }
                />
            <Button title='Add new product' color={'#008080'} onPress={save}/>
        </View>
    )
}


type Product = {
    name: string,
    price: number,
    stock: number,
    discontinued: boolean,
    category: Category,
}

type Category = {
    id: number,
    name: string,
}
const SearchFilterProduct37 = (props: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [subName, setSubName] = useState<string>(""); 
    const [minPrice, setMinPrice] = useState<number>(); 
    const [maxPrice, setMaxPrice] = useState<number>(); 
    const [orderByName, setOrderByName] = useState<boolean>(false); 

        useEffect(() => {
    
        }, [products])

    const filterProducts =  async () => {
            let whereCondition: any = {};  
        
            if (subName) {
                whereCondition.name = Like(`%${subName}%`);
            }
        
            if (!isNaN(Number(minPrice)) && minPrice) {
                whereCondition.price = MoreThan(Number(minPrice));
            }
        
            if (!isNaN(Number(maxPrice)) && maxPrice) {
                whereCondition.price = LessThan(Number(maxPrice));
            }
        
            let orderCondition: any = {};

            if (orderByName) {
                orderCondition.name = 'ASC';
            } else {
                orderCondition.name = 'DESC';
            }
        
            const filteredProducts = await ProductRepository.find({
                relations: ['category'],
                where: whereCondition,
                order: orderCondition
                
            });
        
            setProducts(filteredProducts);
        };
        
        
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(text) => setSubName(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Min price</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Min price"
                    keyboardType="numeric"
                    onChangeText={(text) => setMinPrice(parseFloat(text))}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Max price</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Max price"
                    keyboardType="numeric"
                    onChangeText={(text) => setMaxPrice(parseFloat(text))}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Order by name</Text>
                <Switch
                    value={orderByName}
                    onValueChange={(value) => setOrderByName(value)}
                />
            </View>

            <FlatList
                data={products} 
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Name</Text>
                        <Text style={styles.headerText}>Price</Text>
                        <Text style={styles.headerText}>Stock</Text>
                        <Text style={styles.headerText}>Discontinued</Text>
                        <Text style={styles.headerText}>Category</Text>
                    </View>
                }
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                    <Text style={styles.rowText}>{item.price}</Text>
                    <Text style={styles.rowText}>{item.stock}</Text>
                    <Text style={styles.rowText}>{item.discontinued ? 'Yes' : 'No'}</Text>
                    {
                        item.category ? 
                        <Text style={styles.rowText}>{item.category.name}</Text> :
                        <Text style={styles.rowText}>N/A</Text>
                    }
                </View>
                )}
                keyExtractor={(item, index) => item.name + "_" + index}
            />
            <Button title='Search' color={'#008080'} onPress={filterProducts}/>

        </View>
    )
}
```


***
</br>

### Práctica 38

> 📂
> Reproducir el ejemplo anterior en un ejercicio aparte. Habrá varios tabs.
Uno para introducir propietarios. Otro para introducir casas y una tercera tab para
vincular un propietario con una casa. En una cuarta tab se mostrará en un FlatList los
propietarios con JSON.stringify y debe aparecer la información de sus casas

### Práctica 39

> 📂
> Crear otra pestaña donde se puede poner en un input el id del propietario y
en el otro la referencia catastral de la casa y que al pulsar en el botón: borrar se elimine
el vínculo entre los dos objetos en la base de datos

### Práctica 40

> 📂
> Reproducir el ejemplo anterior con la app de propietarios-casas. De tal
forma que se pueda guardar un array de casas protegido por una transacción. Llamaremos
al método del repositorio: saveAtOnce( casas: Casa[] )

- Código:

```ts

@Entity('casa')
export class Casa extends BaseEntity
{
    @PrimaryColumn('text')
    refCastatal: string;

    @Column('double')
    metros: number;
    
    @ManyToMany(() => Propietario, (propietario) => propietario.casas)
    propietarios: Propietario[];
}


@Entity('propietario')
export class Propietario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;
    @Column('text')
    name: string;

  @ManyToMany(() => Casa, (casa) => casa.propietarios)
  @JoinTable(
    {
      name: 'propietarios_casas',
      joinColumn: { 
        name: 'propietarios',
        referencedColumnName: 'id'
      },
      inverseJoinColumn: { 
        name: 'casas',
        referencedColumnName: 'refCastatal',
      }
    }
  )
  casas: Casa[];
}
```

```tsx
const Tab = createBottomTabNavigator();

const TabNav40 = (props: Props) => {
    const { width, height} = useWindowDimensions();
    const isHorizontal = width > height;
    return (
        <Tab.Navigator id={undefined}
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarPosition: isHorizontal ? 'left' : 'bottom',
                tabBarVariant: isHorizontal ? 'material' : 'uikit',
                tabBarLabelPosition: 'below-icon',
            }}
            >   
                
            <Tab.Screen name='Propietarios' component={PropietarioScreen}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'person' : 'person-outline'} size={30}/>
                }

            }/>
            
            <Tab.Screen name='Casas' component={CasaScreen}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'home' : 'home-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='PropietariosCasas' component={PropietarioCasaScreen}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'people-circle' : 'people-circle-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='Listado' component={ListaScreen}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'receipt' : 'receipt-outline'} size={30}/>
                }
            }/>

            <Tab.Screen name='Eliminar relacion' component={EliminarRelacion}
                options={ {tabBarIcon: ({focused}) => 
                    <Icon name={(focused) ? 'trash' : 'trash-outline'} size={30}/>
                }
            }/>
                
        </Tab.Navigator>
    )
}

const CasaScreen = (props: Props) => {
    const [refCastatal, setRefCastatal] = useState<string>("");
    const [metros, setMetros] = useState<number>(0);

        const save = async () => {
            if(refCastatal.trim() === "" || metros <= 0){
                return;
            }
            
            const casa = new Casa ();
            casa.refCastatal = refCastatal;
            casa.metros = metros;


            const casa2 = new Casa ();
            casa.refCastatal = refCastatal+2;
            casa.metros = metros+1;
            
            
            let casas = [];
            casas.push(casa);
            casas.push(casa2);

            await CasaRepository.saveAtOnce(casas);
            setRefCastatal("");
            setMetros(0);
        }

    return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Ref Castatal</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Referencia castatal"
                            onChangeText={(text) => setRefCastatal(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Metros</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Metros cuadrado"
                            onChangeText={(text) => setMetros(parseFloat(text))}
                        />
                    </View>
                </View>

                <Button title='Crear casa' color={'#008080'} onPress={save}/>
            </ScrollView>
    )
}


type PropietarioType = {
    id: number,
    name: string,
    casas: Casa[]
}


const EliminarRelacion = (props: Props) => {
    const [propietarios, setPropietarios] = useState<PropietarioType[]>([]);

    const [propietarioName, setPropietarioName] = useState<string>("");
    const [refCastatal, setRefCastatal] = useState<string>("");
    
    
    useEffect(() => {
        const getPropietarios = async () => {
            const propietarioList = await PropietarioRepository.find(
                {
                    relations: {casas:true}
                }
            );
            setPropietarios([...propietarioList]);
        }
        getPropietarios();  
    }, [propietarios])

    const handleDeleteRelation = async () => {
        const propietario = await PropietarioRepository.findOne({where: {name: propietarioName}});
        const casa = await CasaRepository.findOne({where: {refCastatal: refCastatal}});
        
        if(propietario && casa){
            propietario.casas = [];
            await PropietarioRepository.save(propietario);

            casa.propietarios = [];
            await CasaRepository.save(casa);
        } 


        setPropietarioName("");
        setRefCastatal("");
    }



    return (
        <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Nombre propietaio</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre del propietario"
                        onChangeText={(text) => setPropietarioName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Ref Castatal</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Referencia Castatal"
                        onChangeText={(text) => setRefCastatal(text)}
                    />
                </View>
            </View>
            <FlatList
                data={propietarios}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                        {item.casas.length >  0 &&
                            <>
                                <Text style={styles.rowText}>{item.name}</Text>
                                <Text style={styles.rowText}>{JSON.stringify(item.casas.map(casa => casa.refCastatal))}</Text>
                            </>
                        }
                    </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Propietario</Text>
                        <Text style={styles.headerText}>RefCastatal</Text>
                    </View>
                }
                />
            <Button title='Eliminar relacion' color={'#008080'} onPress={handleDeleteRelation}/>
        </View>
    )
}


type PropietarioType = {
  id: number;
  name: string;
  casas: Casa[];
}

const ListaScreen = (props: Props) => {
    const [propietarios, setPropietarios] = useState<PropietarioType[]>({} as PropietarioType[]);  

    useEffect(() => {
        const getList = async () => {
            const propietarioList = await PropietarioRepository.find(
                {relations: {casas:true}}
            );
            setPropietarios([...propietarioList]);
        }

        getList();

    }, [propietarios])
    
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={propietarios}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                    <Text style={styles.rowText}>{JSON.stringify(item.casas.map(casa => casa.refCastatal))}</Text>
                    <Text style={styles.rowText}>{JSON.stringify(item.casas.map(casa => casa.metros))}</Text>
                </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Propietario</Text>
                        <Text style={styles.headerText}>RefCastatal</Text>
                        <Text style={styles.headerText}>Metros</Text>
                    </View>
                }
                />
        </View>
    )
}


type Propietario = {
    name: string;
}

const PropietarioScreen = (props: Props) => {
        const [nombre, setNombre] = useState<string>("");

        const save = async () => {
            if(nombre.trim() === ""){
                return;
            }
            
            const propietario : Propietario = {
                name: nombre,
            }
            
            await PropietarioRepository.save(propietario);
            setNombre("");
        }

    return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Nombre</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre del propietario"
                            onChangeText={(text) => setNombre(text)}
                        />
                    </View>
                </View>

                <Button title='Crear propietario' color={'#008080'} onPress={save}/>
            </ScrollView>
    )
}

type PropietarioType = {
  id: number,
  name: string,
  casas: Casa[]
}

type CasaType = {
  refCastatal: string,
  metros: number,
  propietarios: Propietario[]
}
const PropietarioCasaScreen = (props: Props) => {
      const [propietarios, setPropietarios] = useState<PropietarioType[]>({} as PropietarioType[]);
      const [casas, setCasas] = useState<CasaType[]>({} as CasaType[]);

      const [propietarioName, setPropietarioName] = useState<string>("");
      const [refCastatal, setRefCastatal] = useState<string>("");
  
  
      useEffect(() => {
          const getPropietarios = async () => {
              const propietarioList = await PropietarioRepository.find();
              setPropietarios([...propietarioList]);
          }
          getPropietarios();  
      }, [propietarios])

      useEffect(() => {
        const getCasas = async () => {
            const casasList = await CasaRepository.find();
            setCasas([...casasList]);
        }
        getCasas();  
      }, [casas])

      const handleCreateRelation = async () => {
        const propietario = await PropietarioRepository.findOne({where: {name: propietarioName}});
        const casa = await CasaRepository.findOne({where: {refCastatal: refCastatal}});
        
        if(propietario && casa){
          
          propietario.casas = [...(propietario.casas || []), casa];
          await PropietarioRepository.save(propietario);
  
          casa.propietarios = [...(casa.propietarios || []), propietario];
          await CasaRepository.save(casa);

        } 


        setPropietarioName("");
        setRefCastatal("");
      }

  
  
  return (
          <View style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Ref Castatal</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre del propietario"
                        onChangeText={(text) => setPropietarioName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Metros</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Referencia Castatal"
                        onChangeText={(text) => setRefCastatal(text)}
                    />
                </View>
            </View>
            <FlatList
                data={propietarios}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.name}</Text>
                </View>
                )}
                keyExtractor={(item, index) => item.name+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Propietario</Text>
                    </View>
                }
                />
            <FlatList
                data={casas}
                renderItem={({item}) => (
                    <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{item.refCastatal}</Text>
                    <Text style={styles.rowText}>{item.metros}</Text>
                </View>
                )}
                keyExtractor={(item, index) => item.refCastatal+ "_" + index}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Ref Castatal</Text>
                        <Text style={styles.headerText}>Metros</Text>
                    </View>
                }
                />
          <Button title='Crear relacion' color={'#008080'} onPress={handleCreateRelation}/>
        </View>
  )
}
```

***
</br>

</div>