class Division {
    constructor(x,y,width,height){
     var options = {
         isStatic:false
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body); 
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill(255)
        rect(position.x,position.y,this.width,this.height);
    }
}