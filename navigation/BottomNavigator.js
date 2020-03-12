import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-stack';
import { HomeView } from '../screens/HomeView'
import { AddExpense } from "../screens/AddExpense"
import { AddCategory } from "../screens/AddCategory"
import { ExpensesList } from "../screens/ExpensesList"
import { CategoriesList } from "../screens/CategoriesList"

const Tabs = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Expenses" component={ExpensesList} />
    </Tab.Navigator>
  );
}

/* export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
} */

export default createBottomTabNavigator(Tabs) 