import Card from '../ui/Card'
import classes from './PortfolioInfo.module.css'

function PortfolioInfo(props) {

    function sumValue(val) {
        let sum = 0
        for (let i of props.wallets) {
            sum += i[val]
        }
        return Math.floor(sum)
    }

    return (
        <Card>
            <div className={classes.content}>
                <h3>Total Balance: {sumValue('balance')}</h3>
                <h3>Total Transactions: {sumValue('numTransactions')}</h3>
            </div>
        </Card>
    )
}
export default PortfolioInfo