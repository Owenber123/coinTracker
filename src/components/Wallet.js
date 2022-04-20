import Card from '../ui/Card'
import classes from './Wallet.module.css'

function Wallet(props) {

    function clickWallet() {
        let wallet = props.wallets.filter((wallet) => {
            return wallet.id == props.id
        })
        props.setClickedWallet([true, wallet[0]])
    }

    function removeWallet() {
        console.log("ID:" + props.id)
        console.log(typeof props.wallets)
        let newWallets = props.wallets.filter((wallet) => {
            return wallet.id !== props.id
        })
        props.setWallets(newWallets)
    }

    return (
        <Card>
            <div className={classes.content} onClick={clickWallet}>
                <address>Address: {props.id}</address>
                <h3>Balance: {props.balance}</h3>
                <h3>Number of Transactions: {props.numTransactions}</h3>
            </div>
            <div className={classes.actions}>
                {!props.clickedWallet[0] && <input type='button' onClick={removeWallet} value="Remove Wallet"></input>}
            </div>
        </Card>
    )
}

export default Wallet