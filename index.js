function statement(customer, movies) {
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    result += `\t${getMovie(r).title}\t${calculateRent(r)}\n`;
  }
  result += `Amount owed is ${totalRent()}\n`;
  result += `You earned ${totalPtrs()} frequent renter points\n`;
  console.log(result);
  return result;
  function getMovie(r) {
    return movies[r.movieID];
  }
  function calculateRent(r) {
    let thisAmount = 0;
    // determine amount for each movie
    switch (getMovie(r).code) {
      case "regular":
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case "new":
        thisAmount = r.days * 3;
        break;
      case "childrens":
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }
    return thisAmount;
  }
  function totalRent() {
    let totalAmount = 0;
    for (let r of customer.rentals) {
      totalAmount += calculateRent(r);
    }
    return totalAmount;
  }
  function totalPtrs() {
    let frequentRenterPoints = 0;
    for (let r of customer.rentals) {
      frequentRenterPoints += calculateFrequentPointers(r);
    }
    function calculateFrequentPointers(r) {
      return (getMovie(r).code === "new" && r.days > 2) ? 2 : 1;
    }
    return frequentRenterPoints;
  }
}
const customer = {
  "name": "martin",
  "rentals": [
    { "movieID": "F001", "days": 3 },
    { "movieID": "F002", "days": 1 },
  ]
};

const movies = {
  "F001": { "title": "Ran", "code": "regular" },
  "F002": { "title": "Trois Couleurs: Bleu", "code": "regular" },
}

statement(customer, movies);