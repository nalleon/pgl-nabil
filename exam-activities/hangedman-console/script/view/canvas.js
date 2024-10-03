export class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    
    /**
     * Function to draw the default hangman canvas
     */
     drawDefaultCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;

        this.ctx.moveTo(75,400);
        this.ctx.lineTo(195, 400);

        this.ctx.stroke();
    }

    /**
    * Function to draw the hangman canvas based on the number of errors.
    * @param {*} errorNumber counter of errors.
    */

    selectCanvas(errorNumber){
       switch(errorNumber){
           case 1:
                this.drawCanvasError1();
                break;
           case 2:
                this.drawCanvasError2();
                break;
           case 3:
                this.drawCanvasError3();
                break;
           case 4:
                this.drawCanvasError4();
                break;
           case 5:
                this.drawCanvasError5();
                break;
           case 6:
                this.drawCanvasError6();
                break;
           case 7:
                this.drawCanvasError7();
                break;
           case 8:
                this.drawCanvasError8();
                break;
           case 9:
                this.drawCanvasError9();
                break;
           default:
                this.drawCanvasError10();
                break;
       }
   }
   
     /**
     * Canvas drawing function for the first error.
     */
     drawCanvasError1(){
       this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
          
       this.ctx.moveTo(135,400);
       this.ctx.lineTo(130, 50);

       this.ctx.stroke();

   }


   
    /**
     * Canvas drawing function for the second error.
     */
     drawCanvasError2(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(127,50);
       this.ctx.lineTo(290, 50);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the third error.
    */
     drawCanvasError3(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(127,50);
       this.ctx.lineTo(290, 50);
   
       
       this.ctx.moveTo(129,160);
       this.ctx.lineTo(220, 50);
   
       this.ctx.stroke();
   }
   
   /**
    * Canvas drawing function for the fourth error.
    */
     drawCanvasError4(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(127,50);
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
    * Canvas drawing function for the fifth error.
    */
     drawCanvasError5(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(127,50);
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
    * Canvas drawing function for the sixth error.
    */
     drawCanvasError6(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(127,50);
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
    * Canvas drawing function for the seventh error.
    */
     drawCanvasError7(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
        this.ctx.moveTo(127,50);
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
    * Canvas drawing function for the eigth error.
    */
     drawCanvasError8(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(127,50);
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
    * Canvas drawing function for the ninth error.
    */
     drawCanvasError9(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(127,50);
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
    * Canvas drawing function for the tenth error.
    */
     drawCanvasError10(){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   
       this.ctx.beginPath();
       this.ctx.strokeStyle = "black";
       this.ctx.lineWidth = 6;
   
       this.ctx.moveTo(75,400);
       this.ctx.lineTo(195, 400);
   
       this.ctx.moveTo(130,400);
       this.ctx.lineTo(130, 50);
   
       this.ctx.moveTo(127,50);
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