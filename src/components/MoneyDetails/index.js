import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, expensesAmount, incomeAmount} = props
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-details-img"
          alt="balance"
        />
        <div className="money-container">
          <p className="money-details-heading">Your Balance</p>
          <p className="money" data-testId="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-details-img"
          alt="income"
        />
        <div className="money-container">
          <p className="money-details-heading">Your Income</p>
          <p className="money" data-testId="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-details-img"
          alt="expenses"
        />
        <div className="money-container">
          <p className="money-details-heading">Your Expenses</p>
          <p className="money" data-testId="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
