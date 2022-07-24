
function CurrencyInput(props) {

    return (<>
            <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)}></input>
            <div className="currency-select">
            <select className="currency-select" value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
                {props.currencies.map((currency => (
                    <option key={currency} value={currency}>{currency}</option>
                )))}
            </select>
            </div>
            </>
    );
};


export default CurrencyInput;
