import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionType: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onSubmitTransaction = event => {
    event.preventDefault()
    const {title, amount, optionType} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionType,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      amount: parseInt(amount),
      transactionType: displayText,
      title,
    }

    console.log(newTransaction)

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      optionType: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      optionType: event.target.value,
    })
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    this.setState({
      transactionList: transactionList.filter(
        eachTransaction => id !== eachTransaction.id,
      ),
    })
  }

  getIncomeAmount = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.transactionType ===
        transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.transactionType ===
        transactionTypeOptions[1].displayText
      ) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.transactionType ===
        transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }

      balanceAmount = incomeAmount - expensesAmount
    })
    return balanceAmount
  }

  render() {
    const {title, amount, optionType, transactionList} = this.state
    const balanceAmount = this.getBalanceAmount()
    const expensesAmount = this.getExpensesAmount()
    const incomeAmount = this.getIncomeAmount()
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="header-container">
            <h1 className="header-heading">Hi, Richard</h1>
            <p className="header-description">
              Welcome back to your
              <span className="money-manager-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            expensesAmount={expensesAmount}
            incomeAmount={incomeAmount}
          />
          <div className="add-transaction-and-history-container">
            <div className="add-transaction-container">
              <form
                className="transaction-form"
                onSubmit={this.onSubmitTransaction}
              >
                <h1 className="transaction-header">Add Transaction</h1>
                <label className="transaction-label" htmlFor="title">
                  TITLE
                </label>
                <input
                  type="text"
                  className="input"
                  id="title"
                  placeholder="TITLE"
                  value={title}
                  onChange={this.onChangeTitle}
                />

                <label className="transaction-label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  type="text"
                  className="input"
                  id="amount"
                  placeholder="AMOUNT"
                  value={amount}
                  onChange={this.onChangeAmount}
                />

                <label className="transaction-label" htmlFor="type">
                  TYPE
                </label>
                <select
                  id="type"
                  className="input"
                  onChange={this.onChangeType}
                  value={optionType}
                >
                  {transactionTypeOptions.map(eachType => (
                    <option key={eachType.optionId} value={eachType.optionId}>
                      {eachType.displayText}
                    </option>
                  ))}
                </select>
                <button className="form-button" type="submit">
                  Add
                </button>
              </form>
            </div>

            <div className="history-container">
              <div className="history-inner-container">
                <h1 className="history-header">History</h1>
                <ul className="history-table">
                  <li className="table-header">
                    <p className="table-header-cell">Title</p>

                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </li>

                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      transactionDetails={eachTransaction}
                      key={eachTransaction.id}
                      onDeleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
