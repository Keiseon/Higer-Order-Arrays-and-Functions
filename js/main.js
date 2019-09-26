const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ########   UNCOMMENT EACH SECTION TO TEST   #########

// for loop ***
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// Foreach ***
// companies.forEach(function(company) {
//   console.log(company);
// });

// Filter *** Get 21 and Older who can Drink lol

// Basic Old School Filter *** ES5
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// For loop used to filter *** old
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Filter using ES6 Arrow Functions ***
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// Filter Retail Companies *** ES5 way
// const retailCompanies = companies.filter(function(company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });
// console.log(retailCompanies);

// Filter Retail Companies  *** ES6 way
// const retailCompanies = companies.filter(
//   company => company.category === "Retail"
// );
// console.log(retailCompanies);

// Get 80s Companies Using ES6 Filter
// const eightiesCompanies = companies.filter(
//   company => company.start >= 1980 && company.start <= 1989
// );
// console.log(eightiesCompanies);

// Get companies that lasted ten years or more *** ES6 way
const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

// Map ***
// Create Array of Company Names using Map ES5 ***
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// Create Array of Company Names using Map ES6***
// const companyNames = companies.map(
//   company => `${company.name} [${company.start} - ${company.end} ]`
// );
// console.log(companyNames);

// Find the SQRT of Ages ***
// const agesSquared = ages.map(age => Math.sqrt(age).toPrecision(3));
// console.log(agesSquared);

// Find the SQRT of Ages the multiply it by 2 using Map ES6 ***
// const ageMap = ages
//   .map(age => Math.sqrt(age).toPrecision(3))
//   .map(age => age * 2);
// console.log(ageMap);

// sort ***
// Sort companies by start year ES5 ***
// const sortedCompanies = companies
//   .sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//       return 1;
//     } else {
//       return -1;
//     }
//   })
//   .map(company => company.name);

// Sort companies by start year ES6 ***
// const sortedCompanies = companies
//   .sort((c1, c2) => (c1.start > c2.start ? 1 : -1))
//   .map(company => `${company.name} - Category: (${company.category})`);
// console.log(sortedCompanies);

// Sort Ages Using ES6 ***
// const sortAges = ages.sort((a, b) => b - a); // a -b is ascending order  b -a is descending order
// console.log(sortAges);

// reduce ***

// Add up all the ages in the ages Array using Reduce ES5 ***
// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// });

// Add up all the ages in the ages Array using Reduce ES6 ***
// const ageSum = ages.reduce((total, age) => total + age, 0); // Always keep the "0" in the end of the reduce call

// console.log(ageSum);

// Get total Years for all companies Using ES6 ***
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0 // This "0" is VERY IMPORTANT
// );

// console.log(totalYears);

// Combine Methods to get total value of ages added Using ES6 ***

const combined = ages
  .map(age => age * 2)
  .filter(age => age > 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined);
