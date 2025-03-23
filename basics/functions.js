 function greet(){
            console.log("Good Morning");  //Good Morning        
        }
        greet()


        function add(num1,num2){
            console.log(num1+num2) //5
        }
        console.log(add(2,3));//undefined

        let sum1=function sum(num1,num2){//function Expression
            return num1+num2;       //explict return
        }
        
        console.log(sum1(3,5));//8
      let fnc=  function(){//anonymous function
            console.log("hiiiiiii......");
            
        }
        fnc()
        
        function greetings(name){
            console.log(`Good Morinig ${name}`); //Good Morinig Shiv      
        }
        greetings("Shiv")

        function intro(name='Samir'){
            console.log(`Hi, I'm ${name}`); //Hi, I'm Samir
        }
        intro()

            function multiply(num1,num2=3){
            return num1*num2;
        }
        console.log(multiply(5))//15
        console.log(multiply(5,2))//10



        let bill={
            user:"Abhay",
            amount:550
        }
        function billPaid(details){
           return console.log(`Hello ${details.user}, your total bill amount is ${details.amount}`); //Hello Abhay, your total bill amount is 550
        }
        // billPaid(bill)
        billPaid({
            user:"Abhay",
            amount:550
        })
        

        let user={
            username:"Rudra",
            age:22,
            message: function(){
                console.log(`${this.username}, welcome`);   
                console.log(this);                                
            }
        }
        user.message()
        user.username='Abhay'
        user.message()
        console.log(this);

        
            
        // let addTwo=(num1, num2)=>num1+num2
        let addTwo=(num1, num2)=>(num1+num2)
        console.log(addTwo(2,4));//6
        

        // ---------Immediately Invoked Function Expression(IIFE)---------
        (function greet(){
            console.log("Good Morning");  //Good Morning        
        })();
        
        ((name)=>{
            console.log(`Good Morinig ${name}`);//Good Morinig Shiv
            
        })('Shiv')
