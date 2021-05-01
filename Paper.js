class Paper{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,25,options);
        this.image=loadImage("Crumpled Paper.png");
         
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("white");
        //ellipse(pos.x,pos.y,50);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}