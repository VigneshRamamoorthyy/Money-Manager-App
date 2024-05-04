import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, transactionType} = transactionDetails
  const onClickDeleteTransaction = () => {
    onDeleteTransaction(id)
  }
  console.log(transactionType)
  return (
    <li className="table-row">
      <p className="table-cell">{title}</p>

      <p className="table-cell">Rs {amount}</p>
      <p className="table-cell">{transactionType}</p>
      <button
        className="delete-btn"
        onClick={onClickDeleteTransaction}
        data-testId="delete"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
