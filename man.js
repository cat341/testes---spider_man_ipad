class man{
    constructor(x,y,width,height){
        var options = {
            density: 0.35,
            restitution: 0,
            friction: 0.5,
        };
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
        push();
        translate(pos.x,pos.y);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}