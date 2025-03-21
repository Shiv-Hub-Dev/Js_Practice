let name = 'Shiv'
        let age = 25
        console.log('My name is ' + name + ' and my age is ' + age);//My name is Shiv and my age is 25

        let details = `My name is ${name} and my age is ${age}`
        console.log(details);//My name is Shiv and my age is 25

        let string = new String('http://www.example.com')
        console.log(string);//{'http://www.example.com'}

        console.log(string.toString())//http://www.example.com

        console.log(string.valueOf())//http://www.example.com

        console.log(string.length)//22

        console.log(string.charAt(8))// w

        console.log(details.slice(0, 5))// My na

        console.log(details.indexOf('i'))// 8

        console.log(details.replace('Shiv', 'John'))//My name is John and my age is 25
        console.log(details);//My name is Shiv and my age is 25

        console.log(details.concat(" and My website is ", string));//My name is Shiv and my age is 25 and My website is http://www.example.com

        console.log(details.toUpperCase())//MY NAME IS SHIV AND MY AGE IS 25
        console.log(details.toLowerCase())//my name is shiv and my age is 25

        console.log(details.split("is"))// ['My name ', ' Shiv and my age ', ' 25']

        console.log(details.includes('my'));//true
        console.log(details.includes('not'));//false
