

function AddWalletForm(props) {
    return (
        <form>
            <label>
                Wallet Address:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
export default AddWalletForm