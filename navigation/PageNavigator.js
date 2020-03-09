import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { LandingPageScreen } from '../screens/LandingPageScreen'
import { AddExpense } from "../screens/AddExpense"
import { AddCategory } from "../screens/AddCategory"

const PageNavigator = createStackNavigator({
  LandingPage: LandingPageScreen,
  Expense: AddExpense,
  Category: AddCategory,
},
  {
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: true,
      gestureEnabled: true,
    }
  })

export default createAppContainer(PageNavigator) 