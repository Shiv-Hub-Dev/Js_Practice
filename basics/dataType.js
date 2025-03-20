 // Data Types
         // Primitive: Number, String, Boolean, Symbol, undefined, null
        // Non-Primitive: Object, Function, Array

        let number=33
        let stringNumber= String(33)
        console.log(typeof number) // number
        console.log(typeof stringNumber) // string
        console.log(number + stringNumber) // 3333

        let string="string"
        let numberString= Number(string)
        console.log(typeof string) // string
        console.log(typeof numberString) // number
        console.log( numberString) // NaN
        // console.log(string + numberString) // stringstring

        let boolean=1
        let numberBoolean=Boolean(boolean)
        console.log(typeof boolean) // number
        console.log(numberBoolean) // true;        
        console.log(typeof numberBoolean) // boolean
        console.log(boolean + numberBoolean) // 2

        console.log(typeof null) // object;
            
        // 1=> true; 0=>false
        // ""=>false
        // "shiv"=>true
        // " "=> true
        // undifined=>false
        // null=>false


        // Stack Memory(Primitive){do not modified} & Heap Memory(Non-Primitive){modified}
        let name="Rudra"
        let anotherName=name
        console.log(anotherName);//Rudra
        anotherName="Abhay"
        console.log(name) //String;
        console.log(anotherName) //Abhay;


        let obj={
            name:"Rudra",
            age:25
        }
        let anotherObj=obj
        console.log(anotherObj.name) //Rudra
        anotherObj.name="Abhay"
        console.log(obj.name) //Abhay;
        console.log(anotherObj.name) //Abhay;