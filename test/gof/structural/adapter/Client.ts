import PagSeguroTransaction from "./PagSeguroTransaction";
import PagSeguroTransactionAdapter from "./PagSeguroTransactionAdapter";
import PayPalTransaction from "./PayPalTransaction";
import PayPalTransactionAdapter from "./PayPalTransactionAdapter";

const pagSeguroTransaction = new PagSeguroTransaction("GB3HB987HBG7564", 1000, 2);
const transaction1 = new PagSeguroTransactionAdapter(pagSeguroTransaction);
console.log(transaction1)

const paypalTransaction = new PayPalTransaction("1022", 150, "S");
const transaction2 = new PayPalTransactionAdapter(paypalTransaction)
console.log(transaction2)
