import axios from 'axios'
import classes from './Transactions.module.css'
function Transactions(props) {

    async function getTransaction(address) {
        try {
            const config = { headers: { Accept: 'application/json' } }
            let res = await axios.get('https://api.blockchair.com/bitcoin/dashboards/transaction/' + address, config)
            console.log(res.data);

            return res
        }
        catch {
            throw "Could not find transaction with that address"
        }
    }

    return (
        <div>
            <h3>Transactions</h3>
            <ul>
                {props.wallet.transactions.map((transaction) => <li key={transaction} className={classes.transactions}>{transaction}</li>)}
                {/* {props.wallet.transactions.splice(0, 10).map((transaction) => { <li>{getTransaction(transaction)}</li> })} */}
            </ul>
        </div>
    )
}
export default Transactions