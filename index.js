import createStatementData from './createStatementData.es6';

function htmlStatement(customer, movies) {
  const data = createStatementData(customer, movies);
  let result = `<h1>Rental Record for <em>${data.name}</em></h1>\n`;
  result += "<table>\n";
  for (let r of data.rentals) {
    result += `  <tr><td>${r.title}</td><td>${r.amount}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>Amount owed is <em>${data.totalAmount}</em></p>\n`;
  result += `<p>You earned <em>${data.totalFrequentRenterPoints}</em> frequent renter points</p>\n`;
  return result;
}

function statement(customer, movies) {
  const data = createStatementData(customer, movies);
  let result = `Rental Record for ${data.name}\n`;
  for (let r of data.rentals) {
    result += `\t${r.title}\t${r.amount}\n`;
  }
  result += `Amount owed is ${data.totalAmount}\n`;
  result += `You earned ${data.totalFrequentRenterPoints} frequent renter points\n`;
  return result;
}

export default {statement, htmlStatement};