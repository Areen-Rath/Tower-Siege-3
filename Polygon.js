class Polygon{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 20);
        this.width = 20;
        this.image = loadImage("hexagon.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.width);
        pop();
    }
}