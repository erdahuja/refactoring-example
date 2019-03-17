import Customer from './customer.es6';

function statement(customerArg, movies) {
  const customer = new Customer(customerArg, movies);
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    result += `\t${r.movie.title}\t${r.amount}\n`;
  }
  result += `Amount owed is ${customer.amount}\n`;
  result += `You earned ${customer.frequentRenterPoints} frequent renter points\n`;
  return result;
}
  function htmlStatement(customerArg, movies) {
    const customer = new Customer(customerArg, movies);
    let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
    result += "<table>\n";
    for (let r of customer.rentals) {
      result += `  <tr><td>${r.movie.title}</td><td>${r.amount}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>Amount owed is <em>${customer.amount}</em></p>\n`;
    result += `<p>You earned <em>${customer.frequentRenterPoints}</em> frequent renter points</p>\n`;
    return result;
  }
export {statement, htmlStatement};