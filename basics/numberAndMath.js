 // ---------------Number----------------------
        /*
         * Number() - Converts a string to a number.
         * toString() - Converts a number to a string.
         * toFixed() - Returns a string representing a number with a specified number of decimal places.
         * toPrecision() - Returns a string representing a number to specified precision.
         * toLocaleString() - Returns a string representing a number in locale-specific format.
        */
        let number= new Number(200)
        console.log(number);//{200}
        
        console.log( number.toString());//200{type=string}        
        console.log(number.toString().length);//3

        console.log(number.toFixed(2));//200.00
        
        let anotherNumber=29.49
        console.log(anotherNumber.toPrecision(2));//29
        console.log(anotherNumber.toPrecision(5));//29.490
        console.log(anotherNumber.toPrecision(1));//3e+1
        

        let hundreds=1000000000
        console.log(hundreds.toLocaleString());//1,000,000,000
        console.log(hundreds.toLocaleString('en-In'));//1,00,00,00,000

        // ---------------Math----------------------

        /*
         * Math.abs() - Returns the absolute value of a number.
         * Math.round() - Rounds a number to the nearest integer.
         * Math.floor() - Returns the largest integer less than the given number.
         * Math.ceil() - Returns the smallest integer greater than the given number.
         * Math.min() - Returns the smallest  numbers.
         * Math.max() - Returns the largest  numbers.
         * Math.random() - Returns a random number between 0 and 1.
        */

        console.log(Math.abs(-9));//9

        console.log(Math.round(9.2));//9
        console.log(Math.round(9.7));//10
        console.log(Math.round(9.5));//10

        console.log(Math.floor(9.2));//9
        console.log(Math.floor(9.7));//9
        
        console.log(Math.ceil(9.2));//10
        console.log(Math.ceil(9.7));//10

        console.log(Math.min(8,9,2,3,1));//1
        console.log(Math.max(8,9,2,3,1));//9

        console.log(Math.random());//any value between 0&1{0.006844530453628206}

        console.log((Math.random()*10) + 1);//any value between 1&10{6.431612217128137}
        console.log(Math.floor(Math.random()*10) + 1);//any value between 1&10 {3}
         

        let min=5
        let max=10

        console.log((Math.floor(Math.random()*(max - min + 1)))+ min);//value between 5&10 {8}
        