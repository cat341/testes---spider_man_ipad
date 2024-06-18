class roof{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.Body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.Body);
    }
    display(){
        var pos = this.Body.position;
        rectMode(CENTER);
        fill("brown");
        push();
        translate(pos.x,pos.y);
        rect(0,0,this.width,this.height);
        pop();
    }
}