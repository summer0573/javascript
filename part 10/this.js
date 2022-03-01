function f(){
    console.log(this);
    console.log("f if called");
}

function setName(name){
    this.name-name;
}

var o={name:"object", method:f, setName:setName};
var o2={name:"", setName:setName};

o.setName("object1");
o2.setName("object2");

console.log(o, o2);