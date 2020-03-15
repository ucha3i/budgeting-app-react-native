import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { HomeView } from '../screens/HomeView'
import { AddExpense } from "../screens/AddExpense"
import { AddCategory } from "../screens/AddCategory"
import { ExpensesList } from "../screens/ExpensesList"
import { CategoriesList } from "../screens/CategoriesList"
import { AccountsList } from "../screens/AccountsList"
import { AddAccount } from "../screens/AddAccount"

const PageNavigator = createStackNavigator({
  Home: HomeView,
  Expense: AddExpense,
  Expenses: ExpensesList,
  Category: AddCategory,
  Categories: CategoriesList,
  Accounts: AccountsList,
  Account: AddAccount,
},
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: true,
      gestureEnabled: true,
    }
  })

export default createAppContainer(PageNavigator) 