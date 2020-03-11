import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { HomeView } from '../screens/HomeView'
import { AddExpense } from "../screens/AddExpense"
import { AddCategory } from "../screens/AddCategory"

const PageNavigator = createStackNavigator({
  Home: HomeView,
  Expense: AddExpense,
  Category: AddCategory,
  //ExpensesList: Expenses,
  //CategoriesList: Categories,
},
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: true,
      gestureEnabled: true,
    }
  })

export default createAppContainer(PageNavigator) 