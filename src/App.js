// DEPENDENCIES

// PAGES
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "/transactions")
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div className="transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Transactions:</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, i) => {
              return (
                <tr key={i}>
                  <td>{transaction.date}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.from}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
