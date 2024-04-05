//importing inquirer
import inquirer from "inquirer";
//importing chalk
import chalk from "chalk";



let Current_currency:any = {
  'PAK': {
    'USD':278.00,
    'EURO':301.30,
    'YEN':0.55,

  },

  'USD':{
    'PAK': 0.0036,
    'EURO':0.92,
    'YEN':151.61,

  },
  'EURO':{
    'PAK':0.0033,
    'USD':1.08,
    'YEN':164.27,

  },
  'YEN':
  {
    'PAK':1.83,
    'USD':0.0066,
    'EURO':0.0061,

    
  }
}
//specifying interface 
interface currency  {
 
  from: "PAK" | "USD" | "EURO" | "YEN",
  to: "PAK" | "USD" | "EURO" | "YEN",
  convert:number

}



let loop: boolean = true;
while(loop)
{
  //currency which will ask from to convert from user
  let currency:currency = await inquirer.prompt([
    {
      name: 'from',
      type: "list",
      message: chalk.bold.blueBright('Select from which currency you want to exchange:'),
      choices: ['PAK','USD','EURO','YEN']
    },
    {
      name: 'to',
      type: "list",
      message: chalk.bold.blueBright('Select to which currency you want to exchange:'),
      choices: ['PAK','USD','EURO','YEN']
      
    },
    {
      name: 'convert',
      type: "number",
      message: chalk.bold.blueBright('Enter your anount which you want to convert:')
    },
  ])
//assigning variable which taken by user
  let {from,to,convert} = currency;
  //checking that if user give empty data 
  if (to && from && convert && convert != null)
  { //if user select same currency than it will give error 
    if (from != to )
    {
      console.log(chalk.bold.green(`\n
      x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
      
      Currency From: ${chalk.bold.yellow(from)}
      Currency To: ${chalk.bold.yellow(to)}; Current currency rate: ${chalk.bold.yellow(Current_currency[from][to])}
      Amount : ${chalk.bold.yellow((Current_currency[from][to]*convert).toFixed(2))}
      x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
      `))
      //this will ask want to continue if no than program will end
      let want_continue = await inquirer.prompt([
        {
          name:'continue',
          type:'list',
          message:chalk.bold.blue(`Do want to continue:`),
          choices:['Yes','No']
        }
      ])
      want_continue.continue == 'Yes' ? (loop = true) : (loop = false)
    }
    //error will show if currancy is same
    else
    {
      console.log(chalk.bold.red(`\n\n
    <.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.>
                          !! Error !!
             You can't convert in same currancy 
    <.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.>
   \n `))
      loop = true
    }
  }
  //error will show if converting amount is empty
  else if ( convert === null)
  {
    console.log(chalk.bold.red(`\n\n
    <.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.>
                          !! Error !!
               Converting amount can't be empty
    <.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.>
   \n `))
    loop = true
  }
  //error will show if this will show if user give wrong data
  else 
  {
    console.log(chalk.bold.red(`\n\n
    <.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.>
              Invalid Command given by user
       !!you can't convert it into other currency!!
    <.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.!.>
   \n `))
    loop = true
  }

}
//after end of program it will print this credit
console.log(chalk.bold.cyan(`
\n\n
.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.

         
`))