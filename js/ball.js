class Ball{
    constructor(x,y,r){
        var bounce = {
            restitution : 0.3,
            friction : 0.5
        }
        this.body = Bodies.circle(x,y,r,bounce);
        World.add(world,this.body)
        this.image = loadImage("./assets/Ball.png");
        this.r = r;
    }
    display(){
       var pos = this.body.position;
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, this.r, this.r);
    }
}