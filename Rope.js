class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);

        World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA=null;
    }
    display(){
        if(this.rope.bodyA){
        var posA=this.rope.bodyA.position;
        var posB=this.pointB;
        strokeWeight(2);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}
}