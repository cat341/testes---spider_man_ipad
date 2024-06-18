class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.05,
            length: 150,
            pointB: {x:this.offsetX, y:this.offsetY}   
        };
        this.line = Constraint.create(options);
        World.add(world, this.line);
    }
    show(){
        var pointA = this.line.bodyA.position;
        var pointB = this.line.bodyB.position;
        strokeWeight(2);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
    }
}
