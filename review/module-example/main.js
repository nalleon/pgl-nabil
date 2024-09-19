class Persona {

    constructor(nom, ape, edad){
        this.nombre = nom;
        this.apellido = ape;
        this.edad = edad;
    }


    showData(){
        return this.nombre + " " + this.apellido + ", " + this.edad + " años";
    }
}



const DOM = {
    boton : document.getElementById("ejecutar"),
    body : document.querySelector("body"),
    canvas : document.getElementById("canvas")
}


function crearPersona(){
    p = new Persona("John", "Doe", 30);
    alert(p.showData());
}



DOM.boton.addEventListener('click', canvasTest());


DOM.body.addEventListener(
    "keyup",
    (event)=>{
        //if( event.key == "Enter"){
            alert(event.key);
        //}
        
    }
)

function canvasTest(){  
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    //Dibujando lineas
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.moveTo(200,25);
    ctx.lineTo( 100, 50);

    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.ellipse(203,83,8,11,0,0, Math.PI*2); //se establece centro y radios
            
    ctx.stroke();

}