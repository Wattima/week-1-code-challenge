// TASK: Aprogram that calculates an individual’s Net Salary by getting the inputs of basic salary and benefits.
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.


//Total basic salary variable before additions or subtractions in number 
let basic = parseInt(prompt(`Enter your basic salary`)); 

//Benefits includes all allowances given and any extra bonus income
let benefits = parseInt(prompt(`Enter your total benefits`));

//gross income is the total amount earned without any deductions are made
let gross = (basic+benefits);

//the total amount deducted by nssf
let nssf = parseInt(prompt(`Enter total nssf deducted`));

//the total amount deducted by nhif
let nhif = parseInt(prompt(`Enter total nhif deducted`));

//the amount paye tax decuted is 20 percent of gross
let paye = 0.2 * gross;
        
//Deductions calculates the total amount of deductions to be made 
let deductions = (paye+nhif+nssf);

//Net income is total gross minus all deductions
let net = gross-deductions;

//prints the gross amount
console.log(`Your gross income is ${gross}.`);

//prints paye deducted
console.log(`Your paye tax deducted is ${paye}.`);

//prints the total amounts deducted
console.log(`Your total deductables is ${deductions}.`);

//prints the net income left
console.log(`Your net income is ${net}.`);


//Some assumption in this program is that the Paye rate is a standard 20 percent, which I converted to decimal 0.2 





