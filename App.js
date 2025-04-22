import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/transactions')
            .then(response => response.json())
            .then(data => setTransactions(data));
    }, []);

    return (
        <div>
            <h1>Finance Manager</h1>
            <TransactionForm />
            <h2>Transactions</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>{transaction.description} - {transaction.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
