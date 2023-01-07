class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }

    showDetails(){
        console.log(this.fname+" "+this.lname);
    }
}

class Student extends Person{
    constructor(fname,lname,rollNo){
        super(lname,fname)
        this.rollNo=rollNo;

    }
}

let obj=new Student("Paramita","Pal",123);

obj.showDetails();