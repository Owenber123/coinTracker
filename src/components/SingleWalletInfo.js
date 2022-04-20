import Card from "../ui/Card"
import classes from './SingleWalletInfo.module.css'
import Transactions from "./Transactions";

function SingleWalletInfo(props) {
    function goHome() {
        props.setClickedWallet([false, null]);
    }

    return (
        <div>
            <Card>
                <div className={classes.content}>
                    <address>Address: {props.wallet.id}</address>
                    <h3>Balance: {props.wallet.balance}</h3>
                    <h3>Number of Transactions: {props.wallet.numTransactions}</h3>
                </div>
            </Card>
            <input type='button' onClick={goHome} value="Back"></input>
            <Transactions wallet={props.wallet}></Transactions>
        </div>
    )
}
export default SingleWalletInfo