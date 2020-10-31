class Block{
    constructor(x, y, color){
        var options = {
            friction: 0
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.color = color;
        this.visibility = 255;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        if(this.body.speed < 3){
            push();
            rectMode(CENTER);
            fill(this.color);
            rect(pos.x, pos.y, 30, 30);
            pop();
        } else{
            World.remove(world, this.body)
            push();
            this.visibility = this.visibility - 5;
            pop();
        }
    }

    score(){
        if(this.visibility < 0 && this.visibility > -1005){
            score++;
        }
    }
}