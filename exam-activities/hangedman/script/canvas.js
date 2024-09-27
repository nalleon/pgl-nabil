// TODO: move mvc view elements here

export class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    /**
     * Function to draw the efault hangman canvas
     */
    drawDefaultCanva(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;

        this.ctx.moveTo(75,400);
        this.ctx.lineTo(195, 400);

        this.ctx.moveTo(135,400);
        this.ctx.lineTo(130, 50);

        this.ctx.stroke();

        this.ctx.moveTo(135,400);
        this.ctx.lineTo(130, 50);
    }



    /**
    * Function to draw the hangman canvas based on the number of errors.
    * @param {*} errorNumber counter of errors.
    */

    selectCanvas(errorNumber){
       switch(errorNumber){
           case 1:
                this.drawCanvaError1();
                break;
           case 2:
                this.drawCanvaError2();
                break;
           case 3:
                this.drawCanvaError3();
                break;
           case 4:
                this.drawCanvaError4();
                break;
           case 5:
                this.drawCanvaError5();
                break;
           case 6:
                this.drawCanvaError6();
                break;
           case 7:
                this.drawCanvaError7();
                break;
           case 8:
                this.drawCanvaError8();
                break;
           default:
                this.drawCanvaError9();
                setTimeout(() => {
                    alert('¡HAS PERDIDO! La palabra era: '+ globalWordChosen);                    
                }, 100);

                break;
       }
   }
   
   /**
    * Default canvas drawing function.
    */
    drawCanva(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(135,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.stroke();
   
       this.ctx.moveTo(135,400);
       this.ctx.lineTo(130, 50);
   }
   
   
   /**
    * Canvas drawing function for the first error.
    */
    drawCanvaError1(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the second error.
    */
    drawCanvaError2(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the third error.
    */
   
    drawCanvaError3(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "rgb(163, 83, 83)";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(290,47);
       this.ctx.lineTo(290, 130);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the fourth error.
    */
   
    drawCanvaError4(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "rgb(163, 83, 83)";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(290,47);
       this.ctx.lineTo(290, 130);
   
       this.ctx.stroke();
       
       this.ctx.beginPath();
       this.ctx.strokeStyle ="rgb(163, 104, 83)";
       this.ctx.ellipse(290,143,15,16,0,0, Math.PI*2);
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the fifth error.
    */
    drawCanvaError5(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "rgb(163, 83, 83)";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(290,47);
       this.ctx.lineTo(290, 130);
   
       this.ctx.stroke();
       
       this.ctx.beginPath();
       this.ctx.strokeStyle ="rgb(163, 104, 83)";
       this.ctx.ellipse(290,143,15,16,0,0, Math.PI*2);
   
       this.ctx.moveTo(290,156);
       this.ctx.lineTo(290, 230);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the sixth error.
    */
    drawCanvaError6(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "rgb(163, 83, 83)";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(290,47);
       this.ctx.lineTo(290, 130);
   
       this.ctx.stroke();
       
       this.ctx.beginPath();
       this.ctx.strokeStyle ="rgb(163, 104, 83)";
       this.ctx.ellipse(290,143,15,16,0,0, Math.PI*2);
   
       this.ctx.moveTo(290,156);
       this.ctx.lineTo(290, 230);
       
       this.ctx.moveTo(290,159);
       this.ctx.lineTo(255, 190);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the seventh error.
    */
    drawCanvaError7(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "rgb(163, 83, 83)";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(290,47);
       this.ctx.lineTo(290, 130);
   
       this.ctx.stroke();
       
       this.ctx.beginPath();
       this.ctx.strokeStyle ="rgb(163, 104, 83)";
       this.ctx.ellipse(290,143,15,16,0,0, Math.PI*2);
   
       this.ctx.moveTo(290,156);
       this.ctx.lineTo(290, 230);
       
       this.ctx.moveTo(290,159);
       this.ctx.lineTo(255, 190);
   
       this.ctx.moveTo(290,159);
       this.ctx.lineTo(325, 190);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the eighth error.
    */
    drawCanvaError8(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "rgb(163, 83, 83)";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(290,47);
       this.ctx.lineTo(290, 130);
   
       this.ctx.stroke();
       
       this.ctx.beginPath();
       this.ctx.strokeStyle ="rgb(163, 104, 83)";
       this.ctx.ellipse(290,143,15,16,0,0, Math.PI*2);
   
       this.ctx.moveTo(290,156);
       this.ctx.lineTo(290, 230);
       
       this.ctx.moveTo(290,159);
       this.ctx.lineTo(255, 190);
   
       this.ctx.moveTo(290,159);
       this.ctx.lineTo(325, 190);
   
       
       this.ctx.moveTo(290,229);
       this.ctx.lineTo(325, 259);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the ninth error.
    */
    drawCanvaError9(){
       //this.this.ctx = this.canvas.getContext('2d');
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(128,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "rgb(163, 83, 83)";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(290,47);
       this.ctx.lineTo(290, 130);
   
       this.ctx.stroke();
       
       this.ctx.beginPath();
       this.ctx.strokeStyle ="rgb(163, 104, 83)";
       this.ctx.ellipse(290,143,15,16,0,0, Math.PI*2);
   
       this.ctx.moveTo(290,156);
       this.ctx.lineTo(290, 230);
       
       this.ctx.moveTo(290,159);
       this.ctx.lineTo(255, 190);
   
       this.ctx.moveTo(290,159);
       this.ctx.lineTo(325, 190);
   
       this.ctx.moveTo(290,229);
       this.ctx.lineTo(325, 259);
   
       this.ctx.moveTo(290,229);
       this.ctx.lineTo(255, 259);
   
       this.ctx.stroke();
   }
}