import classes from './WalletParser.module.css'
import { useState } from 'react'
import axios from 'axios'
import ListOfWallets from './ListOfWallets'
import PortfolioInfo from './PortfolioInfo'
import SingleWalletInfo from './SingleWalletInfo';

function WalletParser() {
    const [inputValue, setInputValue] = useState('');
    const [wallets, setWallets] = useState([]);
    const [clickedWallet, setClickedWallet] = useState([false, null]);

    async function addWallet() {
        if (wallets.filter(wallet => wallet.id === inputValue).length > 0)
            return

        let data = await getAdressData(inputValue)
        const newWallet = {
            id: inputValue,
            balance: data.address.balance_usd,
            numTransactions: data.address.transaction_count,
            transactions: data.transactions
        };
        setWallets([...wallets, newWallet])
        setInputValue('');
        console.log("Type of Wallets: ")
        console.log(typeof wallets)
        console.log(wallets)
    }

    function removeWallet(id) {
        console.log("ID:" + id)
        console.log(this)
        setWallets({
            wallets: wallets.filter(function (wallet) {
                return wallet.id !== id
            })
        });
        console.log(wallets)
    }

    async function getAdressData(address) {
        console.log(address)
        try {
            const config = { headers: { Accept: 'application/json' } }
            let res = await axios.get('https://api.blockchair.com/bitcoin/dashboards/address/' + address, config)

            let walletData = res.data.data
            console.log(walletData)
            for (let i in walletData) {
                console.log(walletData[i])
                return walletData[i]
            }
        }
        catch {
            throw "Could not find Wallet with that Address"
        }
    }

    // This should sync Wallets
    function syncHandler() {
        return
    }


    console.log("RENDERING")
    console.log(clickedWallet[0])
    if (clickedWallet[0]) {
        console.log("SingleWalletMode")
        return (
            <div>
                <SingleWalletInfo wallet={clickedWallet[1]} setClickedWallet={setClickedWallet}></SingleWalletInfo>
            </div>
        )
    }

    return (
        <div>
            <button id='sync' onClick={syncHandler}>Sync Wallets</button>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
            <button onClick={addWallet}>Add Wallet</button>
            <div>
                <ListOfWallets wallets={wallets} setWallets={setWallets} clickedWallet={clickedWallet} setClickedWallet={setClickedWallet}></ListOfWallets>
                <PortfolioInfo wallets={wallets}></PortfolioInfo>
            </div>
        </div>
    )
}
export default WalletParser;