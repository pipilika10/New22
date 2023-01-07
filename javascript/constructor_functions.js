let animal={};
animal.name="Tiger";
animal.sound="roar";

//second way
let animal1={
    name:"Tiger",
    sound:"roar",
    eat:function(){

    }
}

    let animal2={
        name:"Pig",
        sound:'Grunt',
        sleep:function(){

        }
    }

    function Animal(name,sound){

        this.name=name;
        this.sound=sound;
    }

    let Tiger = new Animal("Tiger","Roar");

    console.log(Tiger.name);
    console.log(Tiger.sound);