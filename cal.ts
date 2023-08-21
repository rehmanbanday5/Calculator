import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";




const sleep = () =>{
    return new Promise((res) =>{
        setTimeout(res,3000);
     })
}


async function welcome(){
    let rainbowTitle=chalkAnimation.rainbow("Let's Start Calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.green(`
    |                                   |           
    |    _______________________        |              
    |   | AR                 0. |       |           
    |   |_______________________|       |        
    |   ____    ____    ____     ____   |         
    |  | 7  |  | 8  |  | 9  |   | +  |  |               
    |  | __ |  | __ |  | __ |   | __ |  |
    |  | 4  |  | 5  |  | 6  |   | -  |  |  
    |  | __ |  | __ |  | __ |   | __ |  |
    |  | 1  |  | 2  |  | 3  |   | *  |  |           
    |  | __ |  | __ |  | __ |   | __ |  |       
    |  | .  |  | 0  |  | =  |   | /  |  |     
    |  |____|  |____|  |____|   |____|  |      
    |                                   |
    |___________________________________| `))
}

await welcome();


async function askQuestion(){
   await  inquirer
    .prompt([

    {
        type:"list",
        name:"operator",
        message:(chalk.yellow)("Which operation you want to perform? \n"),
        choices:["Addition","Subtraction","Multiplication","Division"]
    },
    {
        type:"number",
        name:"num1",
        message:(chalk.red)("Enter number 1 :"),
    },
    {
        type:"number",
        name:"num2",
        message:(chalk.magenta)("Enter number 2 :"),
    }
    ])
    .then((answers) => {

        // console.log(answers);
        if(answers.operator == "Addition"){
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`))
        }
        else if(answers.operator == "Subtraction"){
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if(answers.operator == "Multiplication"){
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if(answers.operator == "Division"){
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
            }
    
    
    })
    

}




async function startAgain(){
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"Restart",
            message:(chalk.italic)("Do you want to continue? press Y or N")

        })
    }while(again.Restart == "y" || again.Restart == "Y" || again.Restart == "yes")

}


startAgain();



