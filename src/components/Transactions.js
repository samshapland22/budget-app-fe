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

    // fetch(API_URL + "/transactions")
    //   .then((res)=>{
    //     return res.json();
    //   }).then((data)=>{
    //     setTransactions(data);
    //   }).catch((err)=> {
    //     throw err
    //   });
  }, []);

  return (
    <div className="transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <div>
                  <p>{transaction.date}</p>
                  <p>{transaction.name}</p>
                  <p>{transaction.amount}</p>
                  <p>{transaction.from}</p>
                </div>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
