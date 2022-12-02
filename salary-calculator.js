// TASK: Aprogram that calculates an individual’s Net Salary by getting the inputs of basic salary and benefits.
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

//Some assumption in this program is that the Paye rate is a standard 20 percent, which I converted to decimal 0.2 


  //if basic salary is equal or less than 24000,  paye is 10 percent
  if (basicSalary <= 24000) {
    paye = basicSalary / 10;
  } 
  //if basic salary is greater than 24000 and less than or equal to 32333, paye is 25 percent
  else if (basicSalary >= 24001 && basicSalary <= 32333) {
    paye = basicSalary / 4;
  } 
  //if basic salary is greater than 32333,  paye is 30 percent
  else if ((basicSalary > 32, 333)) {
    //30% PAYE for above 32,333
    paye = (basicSalary * 3) / 10;
  }
  console.log(`Paye:${paye}`);


