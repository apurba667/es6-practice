const ages =[11,14,12,16,17];
const ages2 =[15,16,18,12];
const ages3 =[15,16,18,12];
//const allAges = ages.concat(ages2).concat(ages3);
const allAges = [...ages2,...ages3,...ages];
console.log(allAges);