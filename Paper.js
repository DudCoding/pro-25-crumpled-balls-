class Paper{
    constructor(x,y, radius){
        var options={
            'isStatic': false, 
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("crumpledBall.png");        
        
    }
    display(){
        
        image(this.image, this.body.position.x, this.body.position.y,this.body.radius*2, this.body.radius*2);
    }

}