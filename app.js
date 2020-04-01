const inquirer = require('inquirer');


var figlet = require('figlet');
 
figlet('RAJ = >  ( o . o )  ', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    display()
});

function display(){
    

    inquirer
    .prompt([
        {
            type:'list',
            name:'c1',
            choices:['About','Projects','Skills','exit']
        }
    ])
    .then(ans=>{
        if(ans.c1=='About'){
            console.log("Hey this is Yathartha. C.E.O. of Trust Yathartha. check this at: http://www.trustyathartha.in/")
            displaynext()
        }else if(ans.c1=='Projects'){
            console.log("checkout my github: https://github.com/rajpatel2619")
            displaynext()
        }else if(ans.c1=='Skills'){
            console.log("I am a full stack web developer in MERN Stack and I developed some app using React-Native ")
            displaynext()
        }
        else{
            console.log("OK Bye !!")
        }
    });


}

function displaynext(){
    
    inquirer
    .prompt([
        {
            type:'list',
            name:'other options:',
            choices:['Back']
        }
    ]).then(ans=>{
        if(ans.c2=='Back'){
            display()
        }
    })

}

