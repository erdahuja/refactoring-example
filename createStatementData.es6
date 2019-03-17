export default function createStatementData(customer, movies) {
  let result = Object.assign({}, customer);
  result.rentals = customer.rentals.map(r => createRentalData(r));
  result.totalAmount = totalAmount();
  result.totalFrequentRenterPoints = totalFrequentRenterPoints();
  return result;

  function createRentalData(rental) {
    let result = Object.assign({}, rental);
    result.title = movieFor(rental).title;
    result.amount = amountFor(rental);
    return result;
  }


  function totalFrequentRenterPoints() {
    return customer.rentals
      .map((r) => frequentRenterPointsFor(r))
      .reduce((a, b) => a + b, 0)
      ;
  }

  function totalAmount() {
    return customer.rentals
      .reduce((total, r) => total + amountFor(r), 0);
  }

  function movieFor(rental) {
    return movies[rental.movieID];
  }

  function amountFor(rental) {
    let result = 0;
    switch (movieFor(rental).code) {
      case "regular":
        result = 2;
        if (rental.days > 2) {
          result += (rental.days - 2) * 1.5;
        }
        return result;
      case "new":
        result = rental.days * 3;
        return result;
      case "childrens":
        result = 1.5;
        if (rental.days > 3) {
          result += (rental.days - 3) * 1.5;
        }
        return result;
    }
    return result;
  }

  function frequentRenterPointsFor(rental) {
    return (movieFor(rental).code === "new" && rental.days > 2) ? 2 : 1;
  }

}