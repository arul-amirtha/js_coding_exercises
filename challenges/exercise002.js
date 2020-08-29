function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city=='Manchester'
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (people%40==0 ) return people/40
  return Math.floor(people/40)+1
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  
  let countsheep = arr.reduce(function(n, currentValue) {
    return n + (currentValue == 'sheep');
  }, 0);
  return countsheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.address.postCode.trim().charAt(0).toUpperCase()=='M' && 
     person.address.city.toUpperCase().trim()=='MANCHESTER')
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
