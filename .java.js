

// const myclass = new mypc();
// myclass.studentnum = 12;
// myclass.chiar = 7;
// myclass.leptop = "thinkpad"
// myclass.projector = "sony"

// //this is place of literal

// const person = (){
//     name:"sharifullah "
//     lastname:"shirzad"
//     age: 28
// }


//  const person = {
//     mame: 'hamid',
//      lastname: 'shirzad',
//     age: 4,

//     mobile:{

//         name : 'vivo',
//         modal : '2022pro',
//         color : 'green'
    
    
//     }
//  }

//document.write(person.mobile.modal);


//     fullname: function(){ return this.name + this.lastname}
//     fullname: function(){ return this.name + "" + this.lastname}


// };
// document.write(person.fullname())


// for(let key in person){
// document.write("<h1>" +person[key]+ "</h1>" );

// }

// function myfunc() {
//     document.getElementById('mybtn').style.fontSize='10rem';
// }




// function searchkey(){
//     var input = document.querySelector('#a').value ;
//     var input = document.querySelector('#b').value ;

//     // const person = {
//     //     name: 'hamid khan',
//     //     lname:  'shirzad',
//     //     age: 4 ,
//     //     job: 'doc',
//     //     phone :  789530481 
//     // };
//     var total = parseInt(input) + parseInt(input);
//     document.write(person[input])

// }

// myobj ={
//     name: 'hamidkhan',
//     age: 17,

//     cars:{

//         car1: "chevrolet",
//         car1: "mercedes",
//         car1: "toyota"

//     }


// }


// for(let key in myobj.cars){
//     document.write(myobj.cars[key]);
// }

const person ={
    name: "sharifullah",
    age: 28,

    cars:[
        {name:"furd", models:[`f_2000`,`f_2001`,`f_1997`]},
        {name:"toyta", models:[`t_2003`,`t_2022`,]},
        {name:"3_whel", models:[`z_zarag`,`z_shahab`,`z_reksh`]},

    ]
}


var demo ="";
demo = demo + person.name;

for(let key in person.cars){
    demo = demo + ("<h1>" + person.cars[key].name + "</h1>");

    for(let key2 in person.cars[key].models){
        demo = demo + person.cars[key].models[key2];
    }
        
    
}

document.getElementById('show').innerHTML=demo;


// const alpha = {
//     a:"A",
//     b:"B",
//     c:"C",
//     d:"D",
//     e:"E",
//     f:"F",

// }

// for(let key in alpha){
//     document.write(alpha[key]);
// }
