import Wallet from "./Wallet"


function ListOfWallets(props) {
    console.log("listwallets: " + props.wallets)
    console.log(props.wallets)


    return (
        <div>
            {props.wallets.map((wallet) => (<Wallet key={wallet.id}
                id={wallet.id}
                balance={wallet.balance}
                transactions={wallet.numTransactions}
                setWallets={props.setWallets}
                wallets={props.wallets}
                clickedWallet={props.clickedWallet}
                setClickedWallet={props.setClickedWallet}
            ></Wallet>))}
        </div>
    )
}
export default ListOfWallets