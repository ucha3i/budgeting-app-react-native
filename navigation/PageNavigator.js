import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeView from '../screens/HomeView'
import { AddExpense } from "../screens/AddExpense"
import { AddCategory } from "../screens/AddCategory"
import ExpensesList from "../screens/ExpensesList"
import CategoriesList from "../screens/CategoriesList"
import { AccountsList } from "../screens/AccountsList"
import { AddAccount } from "../screens/AddAccount"
import IncomesList from "../screens/IncomesList"
import { AddIncome } from "../screens/AddIncome"

const PageNavigator = createStackNavigator({
  Home: HomeView,
  Expense: AddExpense,
  Expenses: ExpensesList,
  Category: AddCategory,
  Categories: CategoriesList,
  Accounts: AccountsList,
  Account: AddAccount,
  Income: AddIncome,
  Incomes: IncomesList
})

export default createAppContainer(PageNavigator) 